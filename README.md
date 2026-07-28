<div align="center">

# 🔐 Reusable React Login

A lightweight, customizable, and reusable React login component built with **JavaScript**, **CSS Modules**, and **Microbundle**.

Create beautiful authentication pages in seconds without rewriting the same login UI for every project.

![React](https://img.shields.io/badge/React-16.8%2B-61DAFB?logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![License](https://img.shields.io/badge/License-MIT-green)
![Bundle](https://img.shields.io/badge/Bundled%20with-Microbundle-blue)

</div>

---

## ✨ Features

- 🚀 Ready to use
- 🎨 Clean modern UI
- 🔒 Built-in loading & error states
- 📦 Lightweight package
- 🎯 CSS Modules (no style conflicts)
- ⚡ Async login support
- ♻️ Reusable across multiple projects
- 🛠 Easy customization

---

# 📦 Installation

Install directly from GitHub.

```bash
npm install github:Mikebabu254/reusable-login
```

or

```bash
yarn add github:Mikebabu254/reusable-login
```

---

# 🚀 Quick Start

Import the stylesheet together with the component.

```jsx
import React from "react";
import "reusable-login/dist/index.css";
import { LoginPage } from "reusable-login";

export default function App() {
  const handleLogin = async ({ email, pass }) => {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        pass,
      }),
    });

    if (!response.ok) {
      throw new Error("Invalid email or password");
    }

    const user = await response.json();

    console.log(user);
  };

  return (
    <LoginPage
      logoUrl="https://via.placeholder.com/150"
      onLogin={handleLogin}
    />
  );
}
```

---

# 📸 Preview

> Add a screenshot here

```
docs/
    preview.png
```

```md
![Preview](docs/preview.png)
```

---

# ⚙️ Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| **onLogin** | Function | ✅ Yes | Async function executed when the login form is submitted. Throwing an error automatically displays the error message. |
| **logoUrl** | String | ❌ No | Logo image displayed above the login form. |

---

## Example

```jsx
<LoginPage
    logoUrl="/logo.png"
    onLogin={handleLogin}
/>
```

---

# 🧠 How It Works

When the user submits the form:

1. Loading state starts
2. Your `onLogin()` function is called
3. If successful, the component finishes loading
4. If an error is thrown, it is automatically displayed

No additional state management is required.

---

# 📁 Project Structure

```
reusable-login
│
├── src
│   ├── LoginPage.jsx
│   ├── LoginPage.module.css
│   └── index.js
│
├── dist
│
├── package.json
├── README.md
└── .gitignore
```

---

# 🏗 Source Files

## LoginPage.jsx

Contains:

- Login form
- Validation
- Loading state
- Error handling
- Async submit logic

---

## LoginPage.module.css

Contains isolated component styling using **CSS Modules**, preventing global CSS conflicts.

---

## index.js

Exports the package.

```javascript
export { LoginPage } from "./LoginPage.jsx";
```

---

# 📦 Package Configuration

```json
{
  "name": "reusable-login",
  "version": "1.0.0",
  "main": "dist/index.js",
  "module": "dist/index.mjs",
  "style": "dist/index.css",
  "source": "src/index.js",
  "scripts": {
    "build": "microbundle --jsx React.createElement",
    "prepare": "npm run build"
  },
  "peerDependencies": {
    "react": ">=16.8.0"
  },
  "devDependencies": {
    "microbundle": "^0.15.0"
  }
}
```

---

# 💻 Local Development

Clone the repository.

```bash
git clone https://github.com/Mikebabu254/reusable-login.git
```

Navigate into the project.

```bash
cd reusable-login
```

Install dependencies.

```bash
npm install
```

Build the package.

```bash
npm run build
```

---

## Test Locally

Link the package.

```bash
npm link
```

Inside another React project:

```bash
npm link reusable-login
```

---

# 🎨 Customization

You can easily customize:

- Logo
- Authentication logic
- API endpoint
- Colours
- Fonts
- Button styles
- Input styles

by editing `LoginPage.module.css`.

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository

2. Create a feature branch

```bash
git checkout -b feature/my-feature
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push

```bash
git push origin feature/my-feature
```

5. Open a Pull Request

---

# 📄 License

Licensed under the **MIT License**.

---

<div align="center">

Made with ❤️ using React

If you like this package, consider giving the repository a ⭐

</div>
