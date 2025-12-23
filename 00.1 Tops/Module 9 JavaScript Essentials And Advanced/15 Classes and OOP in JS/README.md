- Classes & OOP in JS Coverage Depth:
- Declaring classes, constructors, methods.
- Creating instances.
- Demo: class UserProfile { constructor(name, followers){...} } Add method displayProfile().
- Note: Show parallel with Java classes ? OOP bridge for Phase 4.

---

# 🧱 Classes & OOP in JavaScript

## 1️⃣ What is this topic about?

**OOP (Object-Oriented Programming)** is a way of writing code by modeling **real-world entities** as objects.

In JavaScript, **classes** help us:

- Organize related data + behavior together
- Create reusable blueprints
- Write scalable, clean code (important before React & backend)

👉 In your **Bio-Link App**, a **UserProfile** is a real-world object:

- name
- followers
- actions like displaying profile info

---

## 2️⃣ Core OOP Concepts (Beginner Friendly)

| Concept           | Meaning                     |
| ----------------- | --------------------------- |
| Class             | Blueprint / template        |
| Object (instance) | Real usage of class         |
| Constructor       | Runs when object is created |
| Method            | Function inside class       |
| `this`            | Refers to current object    |

---

## 3️⃣ Declaring a Class (Definition + Syntax)

### ✅ Definition

A **class** is a blueprint used to create multiple similar objects.

### ✅ Syntax

```js
class ClassName {
  constructor(parameters) {
    // initialize properties
  }

  methodName() {
    // behavior
  }
}
```

---

## 4️⃣ Demo Class: `UserProfile`

```js
class UserProfile {
  constructor(name, followers) {
    this.name = name;
    this.followers = followers;
  }

  displayProfile() {
    console.log(`User: ${this.name}`);
    console.log(`Followers: ${this.followers}`);
  }
}
```

---

## 5️⃣ Line-by-Line Explanation (Very Important)

### 🔹 `class UserProfile`

Creates a **blueprint** named `UserProfile`.

---

### 🔹 `constructor(name, followers)`

- Special method
- Automatically runs when a new object is created
- Used to **initialize data**

---

### 🔹 `this.name = name`

- `this` refers to **current object**
- Stores passed value inside object

Example:

```js
this.name = "Nikhil";
```

---

### 🔹 `displayProfile()`

- Method (function inside class)
- Defines **behavior**
- Can access object data using `this`

---

## 6️⃣ Creating Instances (Objects)

```js
const user1 = new UserProfile("Aarya", 1500);
const user2 = new UserProfile("Rohan", 800);

user1.displayProfile();
user2.displayProfile();
```

### 🔍 What happens?

1. `new` creates empty object
2. `constructor` runs
3. Values assigned
4. Methods become available

---

## 7️⃣ Mini Project: Bio-Link User Profile (Console + DOM)

### 📁 Project Structure

```
/oop-user-profile
 ├── index.html
 └── script.js
```

---

### 📄 `index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <title>User Profile</title>
  </head>
  <body>
    <h2 id="profile"></h2>

    <script src="script.js"></script>
  </body>
</html>
```

---

### 📄 `script.js`

```js
class UserProfile {
  constructor(name, followers) {
    this.name = name;
    this.followers = followers;
  }

  displayProfile() {
    document.getElementById("profile").innerHTML = `👤 ${this.name} has ${this.followers} followers`;
  }
}

const user = new UserProfile("Nikhil", 2200);
user.displayProfile();
```

### ✅ Output

```
👤 Nikhil has 2200 followers
```

---

## 8️⃣ Why Classes Matter (Real App Thinking)

Without class ❌:

- Multiple variables
- Repeated logic
- Hard to scale

With class ✅:

- Clean structure
- Reusable logic
- Easy to add features later

Example future additions:

```js
increaseFollowers();
isVerified();
updateName();
```

---

## 9️⃣ Java vs JavaScript Classes (OOP Bridge 🚀)

| Java            | JavaScript        |
| --------------- | ----------------- |
| `class User {}` | `class User {}`   |
| `constructor()` | `constructor()`   |
| `this.name`     | `this.name`       |
| `new User()`    | `new User()`      |
| Strongly typed  | Dynamically typed |

### 🔗 Java Example

```java
class UserProfile {
  String name;
  int followers;

  UserProfile(String name, int followers) {
    this.name = name;
    this.followers = followers;
  }

  void displayProfile() {
    System.out.println(name + " " + followers);
  }
}
```

👉 **Same mindset, same OOP logic**
Only syntax changes later.

---

## 🔑 Learning Goal Achieved

✔ Understand class & object
✔ Know constructor & methods
✔ Use `this` confidently
✔ Ready for:

- Inheritance
- React components
- Backend OOP (Java / Spring)

---
