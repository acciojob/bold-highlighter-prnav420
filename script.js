function highlight() {
  //Write your code here

  let getallstrong = document.getElementsByTagName("strong");

  for (let i = 0; i < getallstrong.length; i++) {
    getallstrong[i].style.color = "green";
  }
}

function return_normal() {
  //Write your code here

  let getallstrong = document.getElementsByTagName("strong");

  for (let i = 0; i < getallstrong.length; i++) {
    getallstrong[i].style.color = "black";
  }
}
