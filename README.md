# 🔑 Reusable React Login Component

A lightweight, styled, and customizable React login page component written in JavaScript. Easily integrate authentication UI across any of your React projects without re-writing layout or CSS. Built with CSS Modules for isolated styling and bundled with microbundle.

## 📖 Table of Contents

- Installation & Usage
  - 1. Installation
  - 2. Quick Start
- Props API
- How This Package Was Created
  - 1. Directory Structure
  - 2. Source Code
  - 3. Configuration
- Local Development & Testing
- License

---

## 📦 Installation & Usage

### 1. Installation

You can install this package in any React project directly from GitHub:

npm install github:Mikebabu254/reusable-login

### 2. Quick Start

Import the compiled CSS stylesheet along with the LoginPage component in your React application:

import React from 'react';
import 'reusable-login/dist/index.css';
import { LoginPage } from 'reusable-login';

export default function App() {
  const handleLogin = async ({ email, pass }) => {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, pass }),
    });

    if (!response.ok) {
      throw new Error('Invalid email or password');
    }

    const data = await response.json();
    console.log('User logged in successfully:', data);
  };

  return (
    <LoginPage logoUrl="https://via.placeholder.com/150" onLogin={handleLogin}/>
  );
}

---

## ⚙️ Props API

The LoginPage component accepts the following props:

- onLogin: (credentials: { email: string, pass: string }) => Promise<void> (Required)
  Async callback function triggered on form submission. Returning or throwing an error automatically updates the loading/error states in the UI.
- logoUrl: string (Optional)
  URL or asset path for a logo image displayed above the login card.

---

## 🛠️ How This Package Was Created

If you want to understand how this package was built or reproduce it from scratch, here is the full code setup.

### 1. Directory Structure

reusable-login/
├── src/
│   ├── index.js             # Main entry point
│   ├── LoginPage.jsx        # Login UI & submission logic
│   └── LoginPage.module.css # Scoped CSS Module
├── .gitignore               # Excludes build artifacts & dependencies
├── package.json             # Package metadata & build scripts
└── README.md                # Documentation

### 2. Source Code

#### src/LoginPage.jsx

import React, { useState } from 'react';
import styles from './LoginPage.module.css';

export function LoginPage({ onLogin, logoUrl }) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await onLogin({ email, pass });
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.card}>
      {logoUrl && <img src={logoUrl} alt="Logo" className={styles.logo} />}
      <h2 className={styles.title}>Sign In</h2>
      {error && <p className={styles.error}>{error}</p>}

      <form onSubmit={handleSubmit} className={styles.form}>
        <input 
          type="email" 
          placeholder="Email address" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className={styles.input}
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={pass} 
          onChange={(e) => setPass(e.target.value)} 
          className={styles.input}
          required 
        />
        <button type="submit" disabled={loading} className={styles.button}>
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>
    </div>
  );
}

#### src/LoginPage.module.css

.card {
  max-width: 400px;
  margin: 40px auto;
  padding: 32px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  font-family: system-ui, -apple-system, sans-serif;
}

.logo {
  display: block;
  max-height: 48px;
  margin: 0 auto 16px auto;
}

.title {
  margin: 0 0 20px 0;
  text-align: center;
  color: #1a202c;
}

.error {
  color: #e53e3e;
  font-size: 14px;
  margin-bottom: 12px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.input {
  padding: 10px 12px;
  border: 1px solid #cbd5e0;
  border-radius: 4px;
  font-size: 14px;
}

.button {
  padding: 10px 12px;
  background-color: #3182ce;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
}

.button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

### 3. Configuration

#### src/index.js

export { LoginPage } from './LoginPage.jsx';

#### package.json

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

#### .gitignore

node_modules
dist
.DS_Store

---

## 💻 Local Development & Testing

If you want to modify this component locally or contribute to it:

1. Clone the repository:
   git clone https://github.com/Mikebabu254/reusable-login.git
   cd reusable-login

2. Install dependencies:
   npm install

3. Build the package:
   npm run build

4. Link locally to test in another project:
   npm link
   (Then inside your consuming React app folder: npm link reusable-login)

---

## 📄 License

MIT
