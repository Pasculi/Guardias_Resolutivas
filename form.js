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
  { guardiaId: 1, id: 5, nombre: "Daniel Cayuñir", telefono: "+56967614473" },
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

const arr = [1, 2, 3];

const arrSquared = arr.map(item => item * item); 

console.log(arrSquared);

/* function makeHelloWorld() {

  function helloWorld() {
    console.log("¡Hola, Mundo!")
  }
  return helloWorld;
}
const helloWorld = makeHelloWorld();
console.log(helloWorld);
helloWorld();  */

/* const a = "Variable Global";

function suma() {
  setTimeout(function () {
    const a = "Variable Local"; 
    console.log(a );

  }, 3000)
}
console.log(a);
suma(); */

/* const numeros = [10,1,5,3,6,7,8,45,96,3,72];

const ordenar = numeros.sort(function (a,b){
  return a - b;
});

console.log(ordenar)

const ordenarNum = numeros.sort(function (a,b){
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
});
console.log(ordenarNum); */

/* personas.sort(function(a,b){
  const nombreA = a.nombre.split(' ')[1];
  const nombreB = b.nombre.split(' ')[1];
  return nombreA.localeCompare(nombreB);
})

console.log(personas); */

/* const arr2 = tipoGuardia.map(function(guardia){
 return guardia.date = '19-04-2023';
})
console.log(arr2);

const integersToCheck = [2, 3, 193, 79, 7, 29]; */

/* function isPrime(num) {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(integersToCheck.every(isPrime)); */

/* const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let suma = 0;
for(let i = 0; i < arr.length; i++) {
  suma += arr[i];
}
console.log(suma)

const total = arr.reduce(function(anterior, actual){
  return anterior + actual
})
console.log(total)

const arr3 = personas.map(function(element){
      return element.nombre
})

console.log(arr3.sort(a.id - b.id)); */

/*CALLBACKS*/
/* function function1(fn){
  setTimeout(function(){
    console.log("Mensaje Uno")
    fn();
  }, 3000)

}
function function2(){
  console.log("Mensaje Dos")
}

function1(function2); */
