var user;
var userData;
var projects = [];

function getData(url, variable, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function(variable) {
      if (this.status == 200) {
        data = JSON.parse(this.response);
        variable = data;
        callback(variable);
      }
    };
    xhr.onerror = function() {
      console.log("darn, not found");
    };
    xhr.open('GET', 'https://api.github.com/users/thehamop1', true);
    xhr.send();
}

function setUserData(user){
  var profilePicture = document.getElementById("profilePicture");
  var userName = document.getElementById("name");
  profilePicture.setAttribute('src',user.avatar_url);
  userName.append(user.name);
}

function setProjectsData(projectArray){
  console.log("setProjectsData");
  console.log(projectArray);
}

getData("https://api.github.com/users/thehamop1", userData, setUserData);
// getData("https://api.github.com/thehamop1/repos", projects, setProjectsData);
