//OBJETOS E FUNÇÕES

let designer = {
   name: 'Beth',
   lastName: 'Santos',
   age: 21,
   desenho: {
    modas : "roupas",
    rostos: "faces",
    premios: ['Santa Catarina', 'Belo Horizonte', 'Estados Unidos'],
   },
}
let infoDesigner = 'desenho';
console.log('A desenhista ' + designer.name + ' ' + designer.lastName, 'de apenas ' + designer.age, 'anos encantou o RJ')
console.log('A desenhista ' + designer.name + ' ' + designer.lastName, 'ganhou varios premios em direferentes cidades, como: ' + designer.desenho.premios)
console.log('A desenhista tem como seu forte 2 estilos sendo eles ' + designer.desenho.modas + " e " + designer.desenho.rostos)

let names = {
    person1: 'Karma',
    person2: 'Nami',
    person3: 'Rakan'
};
for (let keys in names) {
    console.log("Olá", names[keys])
}

let names2 = {
    person1: 'Karma',
    person2: 'Nami',
    person3: 'Rakan'
};

for (let k in names2) {
    console.log(k, names2[k])
}


let statusCar = "Desligado";

function ligDeslCarro() {
    if (statusCar === "Desligado") {
        statusCar = "Ligado"
    } else {
        statusCar = "Desligado"
    }
    return statusCar;
}

console.log(ligDeslCarro())

let farois = 'Farois desligados'

function ligDesl() {
    if ( farois === 'Farois desligados') {
        farois = "Farois ativados"
    } else {
        farois = "Farois desativados, cuidado na pista!"
    }
    return farois; 
}
farois = 'Farois ativados'

console.log(ligDesl());

let animes = {
    personagem: 'Naruto',
    origem: 'Japão',
    sinopse: 'Um menino que sonha em ser hokage', 

    historia2: {

    personagem2: 'Sasuke',
    origem2: 'Aldeia da Folha',
    sinopse2: 'Um ninja que se aliou as forças inimigas',
    }
}

for (let keys in animes) {
    //console.log(keys)
   // console.log(animes[keys]);
}

console.log(animes.personagem, ' e ', animes.historia2.personagem2)
console.log(animes.origem, ' e ', animes.historia2.origem2)
console.log(animes.sinopse, ' e ', animes.historia2.sinopse2)



//console.log(animes)
//console.log('Boas vindas ',  animes.personagem)
  

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

  leitor.livrosFavoritos.push({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  }),
  console.log(leitor.nome, ' tem 2 livros favoritos ', leitor.livrosFavoritos);

  //console.log('O livro da ', leitor.nome, ' se chama ', leitor.livrosFavoritos[0].titulo)

  //EXERCICIOS DE FUNÇÕES 

  let palidromo = 'arara';
  let palidromoconfir = palidromo.split('').reverse('').join('');
  
  if (palidromo == palidromoconfir) {
    console.log(true)
  } else {
    console.log(false)
  }
  
 console.log(palidromoconfir);
  
   