document.addEventListener("DOMContentLoaded", () => {
  dateNow();
  listTypeGuard(tipoGuardia);
});

const formulario = document.querySelector(".formulario");
const btnEdit = document.querySelector(".header__btn-edit");
const btnCerrar = document.querySelector(".formulario__btn-cerrar");

const selectGuardia = document.querySelector("#tipo_guardia");
const selectNombreGuardia = document.querySelector("#nombre_guardia");
const optionStart = document.querySelector('.optionStart')

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

const listTypeGuard = (tipoGuardia) => {
  tipoGuardia.map((typeGuard) => {

    optionGuard = `<option class='name_guardia' id='${typeGuard.id}'>${typeGuard.nombre}</option>`;
    selectGuardia.innerHTML += optionGuard;
  });
};
function optionGuard() {
  const optionSelect = selectGuardia.options[selectGuardia.selectedIndex];
  let valor = parseInt(optionSelect.id);

  switch (valor) {
    case 1:
      recorrerArray(subtel);
      const nameGuardiaSub = document.querySelector('.card__nombre_Sub')
      const phoneGuardiaSub = document.querySelector('.card__phone-number_Sub');
      nameGuardiaSub.textContent = subtel.nombre;
      phoneGuardiaSub.textContent = subtel.telefono;
      break;
    case 2:
      recorrerArray(guardB);
      selectNameGuardia()
      const nameGuardiaB = document.querySelector('.card__nombre_B')
      const phoneGuardiaB = document.querySelector('.card__phone-number_B');
      nameGuardiaB.textContent = subtel.nombre;
      phoneGuardiaB.textContent = subtel.telefono;
      break;
    case 3:
      recorrerArray(guardC);
      selectNameGuardia()
      const nameGuardiaC = document.querySelector('.card__nombre_C')
      const phoneGuardiaC = document.querySelector('.card__phone-number_C');
      nameGuardiaC.textContent = subtel.nombre;
      phoneGuardiaC.textContent = subtel.telefono;
      break;
  }
}

selectGuardia.addEventListener("change", optionGuard);

function capturarIdGuardia() {
  const optionSelect =
    selectNombreGuardia.options[selectNombreGuardia.selectedIndex];
  let valuer = parseInt(optionSelect.id);

  selectNameGuardia(valuer)/* +++++ */
  const idGuardia = document.getElementById(`${valuer}`)
  console.log(idGuardia);
  console.log(idGuardia.value);
  console.log(idGuardia.attributes.name.textContent);
}

function recorrerArray(data) {
  selectNombreGuardia.innerHTML = "";
  data.map((guardia) => {
    optionNombreGuard = `<option class='guardia__nombre' name='${guardia.telefono}' id='${guardia.id}'>${guardia.nombre}</option>`;
    selectNombreGuardia.innerHTML += optionNombreGuard;
  });
}
selectNombreGuardia.addEventListener("change", capturarIdGuardia);

function selectNameGuardia() {
  const elementoGuardia = Array.from(document.querySelectorAll('.guardia__nombre'));

  elementoGuardia.map((guardia) => {
    console.log(guardia);
  })
}




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