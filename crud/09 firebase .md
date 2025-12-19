```js
import { getFirestore, getDocs, collection, addDoc, deleteDoc, doc, updateDoc } from "firebase-firestore";
```

1. getFirestore() - Creates a connection to Firestore database for your app.

```js
const db = getFirestore(app);
```

2. collection() - Creates a reference to a collection.

```js
collection(db, "users");
```

3. getDocs() - "READ" Fetches ALL documents from a collection (one-time read).

```js
getDocs(collection(db, "users"));
```

4. addDoc() - "CREATE" Creates a NEW document in a collection. And Firestore Generates ID automatically.

```js
addDoc(collection(db, "users"), {
  name: "Nikhil",
  tel: "9999999999",
  email: "n@gmail.com",
});
```

5. doc() - Creates a reference to ONE document.

```js
doc(db, "users", "abc123");
```

6. deleteDoc() - "DELETE" Deletes one document.

```js
deleteDoc(doc(db, "users", id));
```

7. updateDoc() - "UPDATE" Updates specific fields of a document.

```js
updateDoc(doc(db, "users", id), {
  name: "Updated Name",
});
```

#### One simple table (memorize this)

| Function       | Role                 | Needs              |
| -------------- | -------------------- | ------------------ |
| `getFirestore` | DB connection        | `app`              |
| `collection`   | Collection reference | `db`, name         |
| `getDocs`      | Read many            | collection         |
| `addDoc`       | Create               | collection, data   |
| `doc`          | Document reference   | db, collection, id |
| `deleteDoc`    | Delete               | document ref       |
| `updateDoc`    | Update               | document ref, data |

#### Golden rule (IMPORTANT)

- Firestore functions work in pairs:

`collection() `+ `getDocs()`

`collection()` + `addDoc()`

`doc()` + `deleteDoc()`

`doc()` + `updateDoc()`

### Real-time Firestore: `onSnapshot`

- Listens to Firestore and notifies every time data changes.

- Changes include:
  Add
  Update
  Delete

```js
onSnapshot(collection(db, "users"), (snapshot) => {
  snapshot.forEach((doc) => {
    console.log(doc.id, doc.data());
  });
});
```

- What happens:
  Runs once immediately
  Runs again whenever data changes

- Key difference: getDocs vs onSnapshot
  | Feature | getDocs | onSnapshot |
  | ----------------- | ------- | ---------- |
  | One-time read | ✅ | ❌ |
  | Real-time updates | ❌ | ✅ |
  | Auto refresh UI | ❌ | ✅ |
  | Needs manual call | ✅ | ❌ |

#### Firestore wraps your data inside a snapshot — .data() unwraps it.

```js
const item = doc.data();
const id = doc.id; // to access id.
```
