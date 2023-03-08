const vscode = require("vscode");
const path = require("path");
const fs = require("fs");

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  let disposable = vscode.commands.registerCommand(
    "automate-react-task.createComponent",
    async () => {
      const folderName = await vscode.window.showInputBox({
        placeHolder: "Enter the file name",
        prompt: "Enter the file name",
      });

      if (!vscode.workspace.workspaceFolders) {
        vscode.window.showErrorMessage("No workspace folders are open.");
        return;
      }

      const rootPath = vscode.workspace.workspaceFolders[0].uri.fsPath;
      const folderPath = path.join(rootPath, folderName);

      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
      }

      const jsFilePath = path.join(folderPath, `${folderName}.js`);
      const jsContent = `import styles from "./${folderName}.module.css";

function ${folderName}() {
  return <div className={styles}>${folderName}</div>;
}

export default ${folderName};
  `;
      fs.writeFile(jsFilePath, jsContent, (error) => {
        if (error) {
          vscode.window.showErrorMessage(error.message);
        } else {
          vscode.window.showInformationMessage(`File created: ${jsFilePath}`);
        }
      });

      const cssFilePath = path.join(folderPath, `${folderName}.module.css`);
      fs.writeFile(cssFilePath, "", (error) => {
        if (error) {
          vscode.window.showErrorMessage(error.message);
        } else {
          vscode.window.showInformationMessage(`File created: ${cssFilePath}`);
        }
      });
    }
  );

  let disposable2 = vscode.commands.registerCommand(
    "automate-react-task.convertClassIntoClassName",
    async () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        return;
      }

      const document = editor.document;
      const text = document.getText();
      const newText = text.replace(
        /class\s*=\s*["']\s*([^"'\s]+)\s*["']/g,
        "className={styles.$1}"
      );
      if (text !== newText) {
        const fullRange = new vscode.Range(
          document.positionAt(0),
          document.positionAt(text.length)
        );
        await editor.edit((builder) => {
          builder.replace(fullRange, newText);
        });
        vscode.window.showInformationMessage("Class names converted!");
      } else {
        vscode.window.showInformationMessage(
          "No class names found to convert."
        );
      }
    }
  );

  context.subscriptions.push(disposable, disposable2);
}

module.exports = {
  activate,
};
