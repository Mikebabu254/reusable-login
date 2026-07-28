# 🔑 Reusable React Login Component

A lightweight, zero-config, pre-styled React login page written in pure JavaScript. Built with **CSS Modules** for isolated styling and bundled with **microbundle**.

This package is designed to be pushed to GitHub and installed into any React app—just like a standard `npm` package—without needing to publish to the public npm registry.

---

## 📖 Table of Contents

- [How This Package Was Created](#-how-this-package-was-created)
  - [1. Directory Structure](#1-directory-structure)
  - [2. Component & Styles](#2-component--styles)
  - [3. Entry Point](#3-entry-point)
  - [4. Package Configuration (`package.json`)](#4-package-configuration-packagejson)
- [📦 Installation & Usage](#-installation--usage)
  - [1. Installation](#1-installation)
  - [2. Basic Implementation](#2-basic-implementation)
- [⚙️ Props API](#️-props-api)
- [💻 Local Development & Testing](#-local-development--testing)

---

## 🛠️ How This Package Was Created

If you want to understand how this package was built or reproduce it from scratch, here is the full blueprint.

### 1. Directory Structure

```text
my-reusable-login/
├── src/
│   ├── index.js             # Main entry point (exports components)
│   ├── LoginPage.jsx        # Login UI & submission logic
│   └── LoginPage.module.css # Scoped CSS Module
├── .gitignore               # Excludes build artifacts & dependencies
├── package.json             # Package metadata, peer dependencies & build scripts
└── README.md                # Documentation
