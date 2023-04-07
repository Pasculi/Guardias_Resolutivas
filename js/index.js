const formulario = document.querySelector(".formulario");
const btnEdit = document.querySelector(".header__btn-edit");
const btnCerrar = document.querySelector(".formulario__btn-cerrar");

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

const selectGuardia = document.querySelector("#tipo_guardia");
const nombreGuardia = document.querySelector("#nombre_guardia");

const tipoGuard = tipoGuardia.map((item) => {
  const optionElement = document.createElement("option");
  optionElement.classList.add("tipo_guardia");
  optionElement.value = item.id;
  optionElement.text = item.nombre;
  selectGuardia.appendChild(optionElement);

  console.log(item);
});

const nombre = document.querySelectorAll(".tipo_guardia");
console.log(nombre.text);

const nameGuard = personas.map((element) => {
  const optionName = document.createElement("option");
  optionName.classList.add("name_guardia");
  optionName.value = element.id;
  optionName.text = element.nombre;
  nombreGuardia.appendChild(optionName);
  console.log(element);
});




const btn_cambiarGuardia = decument.querySelector(".formulario__btn");

function cambiarGuardia(e) {
  e.preventDefault();
  const seleccion = selectGuardia.value;
  console.log(seleccion);
}
btn_cambiarGuardia.addEventListener("change", cambiarGuardia);
