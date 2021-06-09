var mainNav = document.getElementById("mainNav");
var listNav = mainNav.getElementsByTagName("li");
for (var i = 0; i < listNav.length; i++) {
  listNav[i].addEventListener("click", function () {
    var current = document.querySelector("#mainNav .active");
    // console.log(current);
    current.className = current.className.replace("active", "");
    this.className += "active";
  });
}