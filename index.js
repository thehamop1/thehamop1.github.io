var user;
var profilePicture = document.getElementById("profilePicture");
var userName = document.getElementById("name");


function loadText() {
  {
    var xhr = new XMLHttpRequest();
    console.log(xhr);

    xhr.onload = function() {
      if (this.status == 200) {
        user = JSON.parse(this.response);
        // console.log(user);
      }
      console.log(user);
      profilePicture.setAttribute('src',user.avatar_url);
      userName.append(user.name);
    };

    xhr.onerror = function() {
      console.log("darn, not found");
    };

    xhr.open('GET', 'https://api.github.com/users/thehamop1', true);

    xhr.send();

  }
}

loadText();
