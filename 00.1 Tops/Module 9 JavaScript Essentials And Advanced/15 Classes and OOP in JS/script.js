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
