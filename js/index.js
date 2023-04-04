const formulario = document.querySelector('.formulario');
const btnEdit = document.querySelector('.header__btn-edit')

function editGuardias(){
    formulario.style.display = 'flex';
}
btnEdit.addEventListener('click', editGuardias);