- Deployment
- npm run build
- Netlify deployment.
- Demo: Publish React SPA online.

---

## 🚀 Deployment of React Application (SPA)

[Image Folder](https://i.sstatic.net/PawvR.png) |
[No Configuration](https://hu.legacy.reactjs.org/static/a2138f74bd9969980c35c50936c6217d/1e088/npm-run-build.png) |
[Netlify](https://cdn-media-1.freecodecamp.org/images/1%2AhxXLMsJtGQCg2RNAdXd3bQ.png) |
[Netlify](https://global.discourse-cdn.com/netlify/optimized/3X/9/e/9e40a7f8a8e786bb370bd167fe9f31d2e70fc9f3_2_690x477.png)

---

## 1️⃣ What is this topic about?

**Deployment** means making your **React application available on the internet** so anyone can access it via a URL.

Until now:

- Your React app runs only on **localhost** (your computer).
- Deployment converts your app into **production-ready files** and hosts them online.

👉 End Goal:
**Your React SPA (Single Page Application) works like a real website.**

---

## 2️⃣ Key Concepts Overview

### 🔹 npm run build

### 🔹 Production Build

### 🔹 Netlify Deployment

### 🔹 Publishing a React SPA online

We’ll understand **each line step-by-step**, then do a **real demo**.

---

## 3️⃣ What is `npm run build`?

### ✅ Definition

`npm run build` creates a **production-ready version** of your React app.

- Code is **minified** (smaller & faster)
- React runs in **production mode**
- Unused code is removed
- Files are optimized for performance

---

### 🧠 What happens internally?

| Development Mode | Production Mode        |
| ---------------- | ---------------------- |
| Large files      | Optimized & compressed |
| Debug messages   | No debug logs          |
| Slower           | Faster                 |
| For learning     | For real users         |

---

### 📁 Output Folder

After running:

```bash
npm run build
```

A new folder is created:

```
/build
```

This folder contains:

- `index.html`
- Optimized JavaScript files
- CSS files
- Assets (images, icons)

👉 **Only this folder is deployed** (not your source code).

---

## 4️⃣ Step-by-Step: Run `npm run build`

### 🔧 Prerequisites

- React project ready (Vite or CRA)
- No errors in console

### ▶️ Command

```bash
npm run build
```

### ✅ Successful Output Example

```plaintext
Build completed successfully.
File sizes after gzip:
  45.32 KB  build/static/js/main.js
```

🎉 Your app is now production-ready.

---

## 5️⃣ What is Netlify?

### ✅ Definition

**Netlify** is a **free hosting platform** used to deploy:

- React apps
- Static websites
- Single Page Applications (SPA)

---

### 🌟 Why Netlify?

✔ Free hosting
✔ Very fast (CDN)
✔ Drag & drop deployment
✔ Auto HTTPS
✔ Easy React support

Perfect for **students & beginners** 👍

---

## 6️⃣ Netlify Deployment (Two Methods)

---

### 🔹 Method 1: Drag & Drop (Easiest)

#### Steps:

1️⃣ Go to **netlify.com**
2️⃣ Sign up / Login
3️⃣ Click **“Add new site” → “Deploy manually”**
4️⃣ Drag & drop the **`build` folder**
5️⃣ Wait 10–20 seconds

🎉 Done! Netlify gives you a live URL.

---

### 🔹 Method 2: GitHub (Professional Way)

(We’ll do this after GitHub lessons)

- Push code to GitHub
- Connect Netlify to repo
- Auto-deploy on every commit

---

## 7️⃣ SPA (Single Page Application) Routing Fix

⚠️ Important for React Router users

### Problem:

Refreshing page gives **404 error**

### Solution:

Add `_redirects` file inside `public` or `build` folder.

**File name:** `_redirects`
**Content:**

```plaintext
/*    /index.html   200
```

This tells Netlify:

> “Always load index.html for all routes”

---

## 8️⃣ Demo: Publish React SPA Online

### 🧪 Demo App Example

- Counter App
- Product List
- Social Bio Link App

### Demo Steps Recap:

```bash
npm run build
```

➡ Drag **build** folder to Netlify
➡ Get live URL
➡ Share with anyone 🌍

---

## 9️⃣ Real-World Use Case

After deployment, you can:

- Add project to **resume**
- Share link with **HR / clients**
- Host **portfolio website**
- Test real-world behavior

Example:

```
https://my-react-app.netlify.app
```

---

## 🔁 Complete Deployment Flow (Mental Model)

```plaintext
React Code
   ↓
npm run build
   ↓
Optimized build folder
   ↓
Upload to Netlify
   ↓
Live Website 🌐
```

---

## 🧠 Interview Tip

> **Q:** How do you deploy a React app?
> **A:**
> “I create a production build using `npm run build` and deploy the build folder on Netlify, which serves the app as a SPA.”

---

## ✅ Next Suggested Topics

If you want, next we can cover:

- GitHub → Netlify auto deployment
- Environment variables (`.env`)
- Custom domain setup
- CI/CD basics

Just tell me 👍
