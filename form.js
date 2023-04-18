const tipoGuardia = [
    { id: 1, nombre: "Guardia Subtel" },
    { id: 2, nombre: "Guardia B" },
    { id: 3, nombre: "Guardia C" },
];


const personas = [
    { guardiaId: 1, id: 1, nombre: "Raul Caulier", telefono: "+56967605441" },
    { guardiaId: 1, id: 2, nombre: "Manuel Araneda", telefono: "+56967603409" },
    { guardiaId: 1, id: 3, nombre: "Patricio Ortega", telefono: "+5697391120" },
    { guardiaId: 1, id: 4, nombre: "Erwin Eggers", telefono: "+56983410816" },
    { guardiaId: 1, id: 5, nombre: "Daniel Cayuñir", telefono: "+56988888888" },
    { guardiaId: 2, id: 6, nombre: "Andrea Burgos", telefono: "+56967603275" },
    { guardiaId: 2, id: 7, nombre: "Marcelo Sandoval", telefono: "+56997391027" },
    { guardiaId: 2, id: 8, nombre: "Mario Colihueque", telefono: "+56967604831" },
    { guardiaId: 2, id: 3, nombre: "Patricio Ortega", telefono: "+5697391120" },
    { guardiaId: 3, id: 9, nombre: "Rodrigo Soriano", telefono: "+56982661596" },
    { guardiaId: 3, id: 8, nombre: "Mario Colihueque", telefono: "+56967604831" },
    { guardiaId: 3, id: 10, nombre: "Oscar Vivar", telefono: "+5697391175" },
    { guardiaId: 3, id: 11, nombre: "Ricardo Riebel", telefono: "+5698282252" },
    { guardiaId: 3, id: 3, nombre: "Patricio Ortega", telefono: "+5697391120" },
    { guardiaId: 3, id: 7, nombre: "Marcelo Sandoval", telefono: "+56997391027" },
];
/* 
const arr = [];
let opt = 1;
console.log(personas);
personas.forEach(function (person) {
    if (person.guardiaId === opt) {
       arr.push(person.nombre)
    }
});
console.log(arr); */

const arr = personas.forEach(function (person){
    console.log(person.nombre);
})