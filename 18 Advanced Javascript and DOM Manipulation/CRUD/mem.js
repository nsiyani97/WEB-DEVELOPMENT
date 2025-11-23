// Array that temporarily stores all user data (id, name, age, salary)
let allData = [];

// Save or Update Data
const saveData = () => {
  // Read values from form fields
  let name = document.getElementById("name").value;
  let age = document.frm.age.value;
  let salary = document.frm.salary.value;
  let id = document.frm.id.value;

  // Get existing data from localStorage
  let stored = JSON.parse(localStorage.getItem("userinfo"));
  let newId = stored ? stored.length + 1 : 1; // Assign new ID

  if (id !== "") {
    // UPDATE EXISTING RECORD
    allData = stored.map((item) => {
      if (item.id == id) {
        item.name = name;
        item.age = age;
        item.salary = salary;
      }
      return item;
    });
  } else {
    // INSERT NEW RECORD
    let obj = {
      id: newId,
      name,
      age,
      salary,
    };
    allData.push(obj);
  }

  // Reset form values
  document.frm.reset();
  document.frm.id.value = "";

  // Save updated list to local storage
  localStorage.setItem("userinfo", JSON.stringify(allData));

  displayData();
};

// Display all data in a table
const displayData = () => {
  let stored = JSON.parse(localStorage.getItem("userinfo"));
  let rows = "";

  stored?.map((item) => {
    rows += `
      <tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.age}</td>
        <td>${item.salary}</td>
        <td>
          <button onclick="editData(${item.id})">Edit</button>
          <button onclick="deleteData(${item.id})">Delete</button>
        </td>
      </tr>`;
  });

  document.getElementById("allData").innerHTML = rows;
};

// Delete selected record
const deleteData = (id) => {
  let stored = JSON.parse(localStorage.getItem("userinfo"));

  // Filter out the deleted item
  let remaining = stored.filter((item) => item.id != id);

  // Reassign IDs sequentially
  let newList = remaining.map((item, index) => {
    item.id = index + 1;
    return item;
  });

  allData = newList;
  localStorage.setItem("userinfo", JSON.stringify(newList));
  displayData();
};

// Load selected record in form for editing
const editData = (id) => {
  let stored = JSON.parse(localStorage.getItem("userinfo"));

  let found = stored.find((item) => item.id == id);

  // Set values back into input fields
  document.getElementById("name").value = found.name;
  document.frm.age.value = found.age;
  document.frm.salary.value = found.salary;
  document.frm.id.value = found.id;
};

displayData();
