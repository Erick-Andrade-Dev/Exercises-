document.getElementById("title").innerText = 'Animes'
console.log(document.getElementById("paragrafo").innerHTML);

document.getElementById("paragrafo").innerText = 'Vamos assistir!'

document.getElementsByClassName("animes")[0].innerText = "Cavaleiros dos Zodiacos"

let animes = document.getElementsByClassName("animes");
for (i = 0; i < animes.length; i += 1) {
    animes[i].innerText = "Naruto"
}

document.getElementsByClassName("animes")[1].innerText = "Arcane";

document.getElementsByClassName("animes")[2].innerText = "Dota";

document.getElementsByTagName("div")[0].innerText = "7 Pecados Capitais";

document.getElementsByTagName("span")[0].innerText = "Death Note"
