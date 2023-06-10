document.addEventListener("DOMContentLoaded", () => {
  dateNow();
  listTypeGuard(tipoGuardia);
});

const subtel = [
  { id: 21, nombre: "Raul Caulier", telefono: "+56967605441" },
  { id: 22, nombre: "Manuel Araneda", telefono: "+56967603409" },
  { id: 23, nombre: "Patricio Ortega", telefono: "+5697391120" },
  { id: 4, nombre: "Erwin Eggers", telefono: "+56983410816" },
  { id: 5, nombre: "Daniel Cayuñir", telefono: "+56988888888" },
];
const guardB = [
  { id: 6, nombre: "Andrea Burgos", telefono: "+56967603275" },
  { id: 7, nombre: "Marcelo Sandoval", telefono: "+56997391027" },
  { id: 8, nombre: "Mario Colihueque", telefono: "+56967604831" },
  { id: 9, nombre: "Patricio Ortega", telefono: "+5697391120" },
];
const guardC = [
  { id: 10, nombre: "Rodrigo Soriano", telefono: "+56982661596" },
  { id: 11, nombre: "Mario Colihueque", telefono: "+56967604831" },
  { id: 12, nombre: "Oscar Vivar", telefono: "+5697391175" },
  { id: 13, nombre: "Ricardo Riebel", telefono: "+5698282252" },
  { id: 14, nombre: "Patricio Ortega", telefono: "+5697391120" },
  { id: 15, nombre: "Marcelo Sandoval", telefono: "+56997391027" },
];




/*FECHA ACTUAL EN FORMATO ESPAÑOL */
function dateNow() {
  const fechaActual = document.querySelector(".header__fecha");
  // Creamos array con los meses del año
  const meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];
  // Creamos array con los días de la semana
  const dias_semana = [
    "Domingo",
    "Lunes",
    "martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  // Creamos el objeto fecha instanciándolo con la clase Date
  const fecha = new Date();
  // Construimos el formato de salida
  fechaActual.innerHTML =
    dias_semana[fecha.getDay()] +
    ", " +
    fecha.getDate() +
    " de " +
    meses[fecha.getMonth()] +
    " de " +
    fecha.getUTCFullYear();
}
dateNow();

/* function pintarCard() {
  const fecha = new Date();
  const dateFormated = fecha.toLocaleDateString();
  console.log(dateFormated);
  if (dateFormated === "12/5/2023") {
    console.log("Fechas son iguales");
  } else {
    console.log("Fechas son distintos");
  }
}
 */
