function showAlert() {
  alert("You Cart is empy");
}

var cookie = document.querySelector(".cookie");
function hide() {
  cookie.remove();
}

var image = document.getElementById("tree");
image.onmouseover = function () {
  this.src = "tree2.jpeg";
};
image.onmouseout = function () {
  this.src = "tree.jpeg";
};
