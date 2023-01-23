const form = document.getElementById('form');
const formInput = document.querySelector('.subscribe__input');
const formBtn = document.querySelector('.subscribe__btn');
const subscribeImg = document.querySelector('.subscribe__image');
const closeBtn = document.querySelector('.subscribe__close');

closeBtn.addEventListener('click', () => {
  window.location.pathname = '/index.html'
})

formInput.addEventListener('input', () => {
  formInput.checkValidity() ? formBtn.classList.add('btn--active') : formBtn.classList.remove('btn--active');
});

form.addEventListener('submit', e => {
  e.preventDefault();

  formInput.value = ' '
  subscribeImg.classList.add('subscribe__image--success');
  formBtn.classList.add('btn--success');
  formBtn.value = "Obrigado, você foi cadastrado(a) com sucesso! 👍";

  formInput.disabled = true;
  formBtn.disabled = true;
});