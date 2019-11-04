class Profile {
  constructor(name, year, url) {
    this.name = name;
    this.year = year;
    this.url = url;
  }
}

class UI {
  addProfileToList(profile) {
    const display = document.querySelector(".display");

    let html =
      '<div class="display-profile flex-row"><div class="display-name">%name%</div><div class="display-year">%year%</div><div class="display-pic"><img src="%url%"alt=""></div><div class="remove-profile">Remove President! X</div>';
    let newHtml = html.replace("%name%", profile.name);
    newHtml = newHtml.replace("%year%", profile.year);
    newHtml = newHtml.replace("%url%", profile.url);
    document.querySelector(".display").insertAdjacentHTML("beforeend", newHtml);
  }

  clearFields() {
    document.getElementById("name").value = "";
    document.getElementById("year").value = "";
    document.getElementById("url").value = "";
  }

  deleteProfile(target) {
    if (target.className === "remove-profile") {
      target.parentElement.remove();
    }
  }
}

//Event Listener for Profile
document.getElementById("form").addEventListener("submit", function(e) {
  //Get Values
  const name = document.getElementById("name").value;
  const year = document.getElementById("year").value;
  const url = document.getElementById("url").value;

  //inmstantiate new profile
  const profile = new Profile(name, year, url);
  //console.log(profile);

  const ui = new UI();
  console.log(ui);

  ui.addProfileToList(profile);

  ui.clearFields();

  e.preventDefault();
});

//delete

document.querySelector(".display").addEventListener("click", function(e) {
  const ui = new UI();

  ui.deleteProfile(e.target);

  ui.clearFields();

  e.preventDefault();
});
