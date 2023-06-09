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
});
/*Funcion que captura el evento, y registramos el valor del select tipo_Guardia*/

function optionGuard() {

  const optionSelect = selectGuardia.options[selectGuardia.selectedIndex];
  let valor = parseInt(optionSelect.value);
  let data = valor;
  console.log(data);
  switch (data) {
    case 1:
      filtrarPersonas(data)
      console.log("Guardia Subtel");
      const nombre = document.querySelector('.card__nombre_Sub');

      console.log(nombre);
      break
    case 2:
      filtrarPersonas(data)
      console.log("Guardia B");
      const nombre2 = document.querySelector('.card__nombre_B');
      console.log(nombre2);
      break
    case 3:
      console.log("Guardia C");
      filtrarPersonas(data);
      const nombre3 = document.querySelector('.card__nombre_C');
      console.log(nombre3);
      break
    }

  /*Funcion donde creamos el filtro para ser mostrado en el select de name__Guardia */

}
selectGuardia.addEventListener("change", optionGuard);

/*Seleccionar tipo de guardia, para llenar select con nombres */

function filtrarPersonas(valor) {
  const nameGuard = personas.filter((persona) => persona.guardiaId === valor); 
  
  nameGuard.map((element) => {
      const optionName = document.createElement("option");
    optionName.classList.add("name_guardia");
    optionName.id = element.id;
    optionName.text = element.nombre;
    nombreGuardia.appendChild(optionName);
  });
  
}

function selectNameGuardias() {
  const personGuard = document.querySelector("#nombre_guardia");
  const opSelect = personGuard.options[personGuard.selectedIndex];
  let valor = parseInt(opSelect.id);
  console.log(personas.id === valor );
  
}
nombreGuardia.addEventListener("change", selectNameGuardias);





/*FECHA ACTUAL EN FORMATO ESPAÑOL */
function dateNow() {
  const fechaActual = document.querySelector('.header__fecha');
  // Creamos array con los meses del año
  const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
  // Creamos array con los días de la semana
  const dias_semana = ['Domingo', 'Lunes', 'martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  // Creamos el objeto fecha instanciándolo con la clase Date
  const fecha = new Date();
  // Construimos el formato de salida
  fechaActual.innerHTML = (dias_semana[fecha.getDay()] + ', ' + fecha.getDate() + ' de ' + meses[fecha.getMonth()] + ' de ' + fecha.getUTCFullYear());
}
dateNow()


function pintarCard() {
  const fecha = new Date();
  const dateFormated = (fecha.toLocaleDateString());

  if (dateFormated === '12/5/2023') {

  } else {

  }
}
pintarCard()
