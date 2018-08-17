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
    xhr.open('GET', url, true);
    xhr.send();
}

function setUserData(user){
  var profilePicture = document.getElementById("profilePicture");
  var userName = document.getElementById("name");
  profilePicture.setAttribute('src',user.avatar_url);
  userName.append(user.name);
}

function setProjectsData(projectArray){
  console.log(projectArray);
  var projectDiv = document.getElementById("projectDiv");
  var para = document.createElement("div");
  var textDiv = document.createElement("div");
  var link = document.createElement("a");
  var image = document.createElement("img");
  var h4 = document.createElement("h4");
  var h4Link = document.createElement("a");


  h4Link.innerHTML = projectArray.name;
  h4Link.setAttribute("");
  textDiv.setAttribute("class", "card-body");
  image.setAttribute("class", "card-img-top");
  image.setAttribute("src", "http://placehold.it/700x400");
  link.setAttribute("href", projectArray[0].html_url);
  para.setAttribute( 'class', 'card h-100');
  link.appendChild(image);
  para.appendChild(link);
  projectDiv.appendChild(para);

}

getData("https://api.github.com/users/thehamop1", userData, setUserData);
getData("https://api.github.com/users/thehamop1/repos", projects, setProjectsData);
