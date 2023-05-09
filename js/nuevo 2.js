renderCardsInitial(initialCards);
function renderCardsInitial(initialCards) {
  initialCards.map((card) => {
    /******************************************* */
    const containerCard = document.querySelector(".card-container");

    const templateCard = document.querySelector(".card-container").content;
    const elementCard = templateCard.querySelector(".card").cloneNode(true);
    elementCard.querySelector(".card__name").textContent = card.name;
    elementCard
      .querySelector(".card__image")
      .setAttribute("src", `${card.link}`);

      elementCard.querySelector(".card__image").setAttribute("alt", `${card.name}`);
     
    elementCard
      .querySelector(".btn__delete")
      .addEventListener("click", function (evt) { 
     evt.target.parentNode.parentNode.remove();

      });
      elementCard.querySelector('.card__image').addEventListener("click", function (evt) {
        const showImage = evt.target
        console.log(showImage);
        
        const modalImagen = document.querySelector('.modal__image');
        modalImagen.style.display ="flex"
      });
    elementCard
      .querySelector(".btn__like")
      .addEventListener("click", function (evt) {
        console.log(evt.target);
        evt.target.classList.toggle("btn__like-active");
      });
      
    containerCard.prepend(elementCard);
    /******************************************* */
  });
}