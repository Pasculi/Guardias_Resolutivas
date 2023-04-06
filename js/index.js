const formulario = document.querySelector('.formulario');
const btnEdit = document.querySelector('.header__btn-edit');
const btnCerrar = document.querySelector('.formulario__btn-cerrar')

function editGuardias(){
    formulario.style.display = 'flex';
}
btnEdit.addEventListener('click', editGuardias);

function cerrarGuardias(){
    formulario.style.display = 'none';
}
btnCerrar.addEventListener('click', cerrarGuardias);

