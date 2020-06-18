const nameInputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

nameInputRef.addEventListener('input', el => {
  nameOutputRef.textContent = el.target.value;
});
