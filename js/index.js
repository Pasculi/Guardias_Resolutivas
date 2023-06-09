document.addEventListener("DOMContentLoaded", () => {
  pintarCard();
  listTypeGuard(tipoGuardia);
});

const formulario = document.querySelector(".formulario");
const btnEdit = document.querySelector(".header__btn-edit");
const btnCerrar = document.querySelector(".formulario__btn-cerrar");

const selectGuardia = document.querySelector("#tipo_guardia");
const selectNombreGuardia = document.querySelector("#nombre_guardia");

function editGuardias() {
  formulario.style.display = "flex";
}
btnEdit.addEventListener("click", editGuardias);

function cerrarGuardias() {
  formulario.style.display = "none";
}
btnCerrar.addEventListener("click", cerrarGuardias);

const tipoGuardia = [
  { id: 1, nombre: "Guardia Subtel" },
  { id: 2, nombre: "Guardia B" },
  { id: 3, nombre: "Guardia C" },
];

const subtel = [
  { guardiaId: 1, id: 1, nombre: "Raul Caulier", telefono: "+56967605441" },
  { guardiaId: 1, id: 2, nombre: "Manuel Araneda", telefono: "+56967603409" },
  { guardiaId: 1, id: 3, nombre: "Patricio Ortega", telefono: "+5697391120" },
  { guardiaId: 1, id: 4, nombre: "Erwin Eggers", telefono: "+56983410816" },
  { guardiaId: 1, id: 5, nombre: "Daniel Cayuñir", telefono: "+56988888888" },
];
const guardB = [
  { guardiaId: 2, id: 6, nombre: "Andrea Burgos", telefono: "+56967603275" },
  { guardiaId: 2, id: 7, nombre: "Marcelo Sandoval", telefono: "+56997391027" },
  { guardiaId: 2, id: 8, nombre: "Mario Colihueque", telefono: "+56967604831" },
  { guardiaId: 2, id: 3, nombre: "Patricio Ortega", telefono: "+5697391120" },
];
const guardC = [
  { guardiaId: 3, id: 9, nombre: "Rodrigo Soriano", telefono: "+56982661596" },
  { guardiaId: 3, id: 8, nombre: "Mario Colihueque", telefono: "+56967604831" },
  { guardiaId: 3, id: 10, nombre: "Oscar Vivar", telefono: "+5697391175" },
  { guardiaId: 3, id: 11, nombre: "Ricardo Riebel", telefono: "+5698282252" },
  { guardiaId: 3, id: 3, nombre: "Patricio Ortega", telefono: "+5697391120" },
  { guardiaId: 3, id: 7, nombre: "Marcelo Sandoval", telefono: "+56997391027" },
];

const listTypeGuard = (tipoGuardia) => {
  tipoGuardia.map((typeGuard) => {
    console.log(typeGuard);
    optionGuard = `<option class='name_guardia' id='${typeGuard.id}'>${typeGuard.nombre}</option>`;
    selectGuardia.innerHTML += optionGuard;
  });
};
function optionGuard() {
  const optionSelect = selectGuardia.options[selectGuardia.selectedIndex];
  let valor = parseInt(optionSelect.id);

  console.log(valor);
  switch (valor) {
    case 1:
      recorrerArray(subtel);
      break;
    case 2:
      recorrerArray(guardB);
      break;
    case 3:
      recorrerArray(guardC);
      break;
  }
}
selectGuardia.addEventListener("change", optionGuard);

function capturarIdGuardia() {
  const optionSelect =
    selectNombreGuardia.options[selectNombreGuardia.selectedIndex];
  let valor = parseInt(optionSelect.id);
  console.log(valor);

  return valor;
}

function recorrerArray(data) {
  selectNombreGuardia.innerHTML = "";
  data.map((guardia) => {
    optionNombreGuard = `<option class='name_guardia' id='${guardia.id}'>${guardia.nombre}</option>`;
    selectNombreGuardia.innerHTML += optionNombreGuard;
    
  });

}
selectNombreGuardia.addEventListener("change", capturarIdGuardia);



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

function pintarCard() {
  const fecha = new Date();
  const dateFormated = fecha.toLocaleDateString();
  console.log(dateFormated);
  if (dateFormated === "12/5/2023") {
    console.log("Fechas son iguales");
  } else {
    console.log("Fechas son distintos");
  }
}
