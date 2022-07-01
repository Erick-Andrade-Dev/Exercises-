document.getElementById("title").innerText = 'Somos tão jovens'
console.log(document.getElementById("paragrafo").innerHTML);

document.getElementsByClassName("animes")[0].innerText = "Cavaleiros dos Zodiacos"

let animes = document.getElementsByClassName("animes");
for (i = 0; i < animes.length; i += 1) {
    animes[i].innerText = "Naruto"
}

