const nameInputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

nameInputRef.addEventListener('input', e => {
  nameOutputRef.textContent = e.target.value;
  if (e.target.value === '') {
    nameOutputRef.textContent = 'незнакомец';
  }
});
