/* const people = [
    "Steven Spielberg",
    "Michael Bay",
    "Robin Spielberg",
    "Sasha Rebecca Spielberg",
    "James Cameron"
]; */

// Crea un nuevo array vacío en una variable spielbergs
/* const spielbergs = []
people.forEach(function (element) {
    if (element.includes("Spielberg")) {
        spielbergs.push(element);
    }
  
});
console.log(spielbergs); */
// Muestra el array spielbergs resultante en la consola.

/* const words = [
    "Baden",
    "aye",
    "go",
    "agar"
];

const reduplications = words.map(function (word) {
    return `${word}-${word}`;
})  */// Continúa con el código aquí

/* console.log(reduplications);

const counter = [
    "Emperador",
    "Rey",
    "César",
    "Faraón",
    "Sultán",
    "Zar"
];

const counterIndexed = counter.map(function (person, index) {
    return `${index + 1}. ${person}`;
});

console.log(counterIndexed);

const a = [
    "Harry Potter y la piedra filosofal",
    "Harry Potter y la cámara secreta",
    "Harry Potter y el prisionero de Azkaban",
    "Harry Potter y el cáliz de fuego",
    "Harry Potter y la Orden del Fénix",
    "Harry Potter y el misterio del príncipe",
    "Harry Potter y las Reliquias de la Muerte",
    "Harry Potter y los métodos de racionalidad"
];

const b = [];
a.forEach(function (item, i, a) {
    
    b.push(a[i].split(" y ")[1]);
}) 


console.log(b);

const arr = [
    "Interacción gravitatoria",
    "Fuerza electromagnética",
    "Fuerza nuclear fuerte",
    "Fuerza nuclear débil"
];

arr.forEach(function (element, index) {
    console.log(`${index + 1}. ${element}`)
});
 */

/* const characters = [
    "Luke Skywalker",
    "Obi-Wan",
    "Chewbacca",
    "Anakin Skywalker",
    "Han Solo",
    "Palpatine"
];

const newCharacters = characters.map(function (character) {
    if (character === "Anakin Skywalker") {
        return "Darth Vader";
    } else {
        return character;
    }
});

console.log(newCharacters); */

/* const movies = [
    "Titanic (1997)",
    "Black Panther (2018)",
    "Isle of Dogs (2018)",
    "The Hateful Eight (2015)"
];

const moviesFiltered = movies.filter(function (item) {
    return item.includes("2018");
});

console.log(moviesFiltered); */

const cards = [
    "6 de corazones", "7 de corazones", "8 de corazones",
    "9 de corazones", "10 de corazones", "Jota de corazones",
    "Reina de corazones", "Rey de corazones",
    "As de corazones", "6 de picas", "7 de picas",
    "8 de picas", "9 de picas", "10 de picas",
    "Jota de picas", "Reina de picas",
    "Rey de picas", "As de picas", "6 de tréboles",
    "7 de tréboles", "8 de tréboles", "9 de tréboles",
    "10 de tréboles", "Jota de tréboles", "Reina de tréboles",
    "Rey de tréboles", "As de tréboles", "6 de diamantes",
    "7 de diamantes", "8 de diamantes", "9 de diamantes",
    "10 de diamantes", "Jota de diamantes",
    "Reina de diamantes", "Rey de diamantes",
    "As de diamantes"
];

/* const cardsFiltered = cards.filter(function (card) { */
    /* Escribe el código aquí */
/*     return card.includes("10") && (card.includes("corazones") || card.includes("diamantes"));
}) */;

const cardsFiltered = cards.filter(function (card) {
    return parseInt(card, 10) <= 10
        && (card.includes("de corazones")
            || card.includes("de diamantes"));
});


console.log(cardsFiltered);