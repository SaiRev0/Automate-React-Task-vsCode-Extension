const vscode = require("vscode");
const path = require("path");
const fs = require("fs");

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  let disposable = vscode.commands.registerCommand(
    "react-component-generator.createComponent",
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

  context.subscriptions.push(disposable);
}

module.exports = {
  activate,
};
