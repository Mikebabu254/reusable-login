# 🔐 Reusable Login

<p align="center">
  <img src="https://via.placeholder.com/180x80?text=Reusable+Login" alt="Reusable Login Logo">
</p>

<p align="center">
A lightweight, customizable React login component with built-in loading and error handling.
<br/>
Designed to be dropped into any React project with minimal setup.
</p>

<p align="center">

![React](https://img.shields.io/badge/React-16.8%2B-61DAFB?logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript)
![CSS Modules](https://img.shields.io/badge/CSS-Modules-blue)
![License](https://img.shields.io/badge/License-MIT-green)

</p>

---

## ✨ Features

- 🎨 Clean and responsive UI
- ⚡ Built with React Hooks
- 🔒 Password field included
- ⏳ Automatic loading state
- ❌ Built-in error handling
- 🖼️ Optional logo support
- 🎯 Easy authentication integration
- 📦 Lightweight bundle using Microbundle
- 🎭 Scoped styling with CSS Modules

---

# 📑 Table of Contents

- [Installation](#-installation)
- [Quick Start](#-quick-start)
- [Props](#-props)
- [Component Preview](#-component-preview)
- [Project Structure](#-project-structure)
- [Source Code](#-source-code)
- [Development](#-development)
- [Build](#-build)
- [License](#-license)

---

# 📦 Installation

Install directly from GitHub.

```bash
npm install github:Mikebabu254/reusable-login
```

or with Yarn

```bash
yarn add github:Mikebabu254/reusable-login
```

---

# 🚀 Quick Start

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
      body: JSON.stringify({ email, pass }),
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

# ⚙️ Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| **onLogin** | `({ email, pass }) => Promise<void>` | ✅ | Called when the user submits the form. Throwing an error automatically displays it in the UI. |
| **logoUrl** | `string` | ❌ | Displays a logo above the login form. |

---

# 🖼️ Component Preview

```
+-----------------------------------+
|            LOGO                   |
|                                   |
|           Sign In                 |
|                                   |
| Email Address                     |
| [___________________________]     |
|                                   |
| Password                          |
| [___________________________]     |
|                                   |
|      [ Sign In Button ]           |
+-----------------------------------+
```

---

# 📁 Project Structure

```
reusable-login
│
├── src
│   ├── index.js
│   ├── LoginPage.jsx
│   └── LoginPage.module.css
│
├── dist
│
├── package.json
├── README.md
└── .gitignore
```

---

# 🧩 Source Code

## LoginPage

```jsx
export function LoginPage({ onLogin, logoUrl }) {
    ...
}
```

Handles

- Email input
- Password input
- Loading state
- Error state
- Form submission

---

## Styling

Uses **CSS Modules** to prevent class name collisions.

```css
.card {
    ...
}
```

---

## Entry Point

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

# 💻 Development

Clone the repository

```bash
git clone https://github.com/Mikebabu254/reusable-login.git
```

Navigate into the project

```bash
cd reusable-login
```

Install dependencies

```bash
npm install
```

Build the package

```bash
npm run build
```

---

# 🔗 Local Testing

Link the package

```bash
npm link
```

Inside another React project

```bash
npm link reusable-login
```

---

# 🚀 Publishing Updates

After making changes

```bash
npm version patch
npm run build
git add .
git commit -m "Update component"
git push
```

Consumers can then install the latest version

```bash
npm install github:Mikebabu254/reusable-login
```

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push the branch
5. Open a Pull Request

---

# 📄 License

This project is licensed under the **MIT License**.

---

<p align="center">

Made with ❤️ by **Michael Ndolo**

</p>
