document.getElementsByClassName("section")[2].innerHTML = 'É da cor dos seus olhos...'

document.querySelector(".title").style.backgroundColor = "pink"

document.getElementsByTagName("h1")[0].innerHTML = 'BR Rock '

document.getElementsByTagName("h1")[1].innerHTML = "Trechos";

document.getElementsByTagName("h1")[1].style.backgroundColor = "green";

document.getElementById("cantor").style.backgroundColor = "blue";


///////////////////////////////////////////////////////////////////////////////////
let trechos = document.getElementsByTagName("p");
for (let index = 0; index < trechos.length; index++) {
     trechos[index].classList.add("upercase")
}









    
 

