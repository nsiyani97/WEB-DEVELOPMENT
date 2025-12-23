// User object
const user = {
  userName: "Aarya",
  followers: 1500,
  links: ["Instagram", "GitHub"],
};

// Destructuring
const { userName, followers, links } = user;

// Arrow function
const showProfile = (name, count) => {
  console.log(`Hello ${name}, you have ${count} followers!`);
};

// Spread operator
const allLinks = [...links, "LinkedIn"];

// Call function
showProfile(userName, followers);

console.log("Social Links:", allLinks);
