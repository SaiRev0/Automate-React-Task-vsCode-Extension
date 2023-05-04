# Automate React Task

Automate React Task is a VS Code extension that provides convenient commands to automate common tasks when working with React projects.

## Commands

### Create Component

This command creates a new React component by generating a folder containing a `.js` file and a `.module.css` file. It simplifies and speeds up the component creation process.

To use this command:

1. Open the Command Palette in VS Code (press `Ctrl+Shift+P` or `Cmd+Shift+P`).
2. Type "Create Component" and select it.
3. Enter the desired file name when prompted.
4. The extension will create a folder with the specified name in your workspace and generate the necessary files inside it.

### Convert Class into ClassName

This command converts HTML `class` attributes into CSS modules `className` objects. It helps in using CSS modules with React components.

To use this command:

1. Open the file in the editor where you want to convert the class names.
2. Ensure that the file is a `.jsx`, `.js` for javascript, or `.tsx`, `.ts` for typescript.
3. Open the Command Palette in VS Code (press `Ctrl+Shift+P` or `Cmd+Shift+P`).
4. Type "Convert Class into ClassName" and select it.
5. The extension will convert the class names into CSS modules `className` objects.

Example:

Before conversion:

```
<div class="container">
  <h1 class=title>Hello, world!</h1>
</div>
```

After conversion:

```
<div className={styles.container}>
  <h1 className={styles.title}>Hello, world!</h1>
</div>
```

### Convert Hyphen to Underscore

This command converts hyphen-separated class names in CSS files into underscore-separated class names. It is useful when working with CSS modules and wanting to convert class names to follow a specific convention.

To use this command:

1. Open the file in the editor where you want to convert the class names.
2. Ensure that the file is a stylesheet file (`.css`, `.scss`, or `.postcss`).
3. Select the class names you want to convert.
4. Open the Command Palette in VS Code (press `Ctrl+Shift+P` or `Cmd+Shift+P`).
5. Type "Convert Hyphen to Underscore" and select it.
6. The extension will convert hyphen-separated class names into underscore-separated class names.

## Requirements

- React workspace.

## Release Notes

### 0.1.0

- Added "Convert Class into ClassName" command to convert class names to CSS modules `className` objects.
- Added "Convert Hyphen to Underscore" command to convert hyphen-separated class names in CSS files.

## Feedback and Contributions

If you have any feedback, suggestions, or issues, please [submit them here](https://github.com/SaiRev0/Automate-React-Task-vsCode-Extension/issues). Contributions are also welcome! Fork the repository and create a pull request with your changes.

**Enjoy automating your React tasks with Automate React Task extension!**
