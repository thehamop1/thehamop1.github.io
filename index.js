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
  var userName = document.getElementById("name");
  userName.append(user.name);
}

function setProjectsData(projectArray){
  // This function is not pretty i might come back and change it
  for(let x=0;x<projectArray.length;x++){
    // console.log(projectArray[x]);
    var projectDiv = document.getElementById("projectDiv");
    var containerDiv = document.createElement("div");
    var para = document.createElement("div");
    var image = document.createElement("img");
    var textDiv = document.createElement("div");
    var h4 = document.createElement("h4");
    var link = document.createElement("a");
    var h4Link = document.createElement("a");
    var textBody = document.createElement("p");
    h4Link.innerHTML = projectArray[x].name;
    textBody.innerHTML = projectArray[x].description;
    textBody.setAttribute("class", "card-text");
    containerDiv.setAttribute("class", "col-lg-4 col-md-6 mb-3 mt-4");
    h4Link.setAttribute("href", projectArray[x].html_url);
    textDiv.setAttribute("class", "card-body");
    image.setAttribute("class", "card-img-top");
    image.setAttribute("src", projectArray[x].html_url + "/raw/master/cover.jpeg");
    link.setAttribute("href", projectArray[x].html_url);
    para.setAttribute( 'class', 'card h-100');
    h4.setAttribute("class", "card-title");
    link.appendChild(image);
    para.appendChild(link);
    h4.append(h4Link);
    textDiv.appendChild(h4);
    para.appendChild(textDiv);
    containerDiv.appendChild(para);
    textDiv.appendChild(textBody);
    projectDiv.appendChild(containerDiv);
  }
}

getData("https://api.github.com/users/thehamop1", userData, setUserData);
getData("https://api.github.com/users/thehamop1/repos", projects, setProjectsData);
