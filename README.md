# My Reusable Login Component

A lightweight, styled, and customizable React login page component written in JavaScript. Easily integrate authentication UI across any of your React projects without re-writing layout or CSS.

---

## 📦 Installation

You can install this package directly from GitHub:

```bash
npm install github:Mikebabu254/reusable-login

🚀 Quick Start
To use the component, import the library alongside its compiled CSS file into your React application.

import React from 'react';

// 1. Import the default styles
import 'my-reusable-login/dist/index.css';

// 2. Import the component
import { LoginPage } from 'my-reusable-login';

export default function App() {
  const handleLogin = async ({ email, pass }) => {
    // Send the credentials to your backend API
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, pass }),
    });

    if (!response.ok) {
      throw new Error('Invalid email or password');
    }

    // Handle success (e.g., store token, redirect user)
    console.log('User logged in successfully');
  };

  return (
    <LoginPage logoUrl="[https://via.placeholder.com/150](https://via.placeholder.com/150)" onLogin="{handleLogin}"/>
  );
}


⚙️ Props APIThe <LoginPage /> component accepts the following props:PropTypeRequiredDescriptiononLogin(credentials: { email, pass }) => Promise<void>YesA callback function triggered on form submission. Must return a Promise so the component can handle loading and error states.logoUrlstringNoURL or path to an image file to display at the top of the card.

🎨 Customizing & Local Development
If you want to modify this package locally or contribute to it:

Clone the repository:

Bash
git clone [https://github.com/YOUR_GITHUB_USERNAME/my-reusable-login.git](https://github.com/YOUR_GITHUB_USERNAME/my-reusable-login.git)
cd my-reusable-login
Install dependencies:

Bash
npm install
Build the package:

Bash
npm run build
Link locally to test in another project:

Bash
npm link
Then inside your consuming React app folder:

Bash
npm link my-reusable-login
📄 License
MIT
