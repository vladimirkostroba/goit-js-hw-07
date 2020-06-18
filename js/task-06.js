const inputRef = document.querySelector('#validation-input');
console.log(inputRef);

inputRef.addEventListener('blur', e => {
  if (e.target.value.length !== Number(inputRef.getAttribute('data-length'))) {
    inputRef.classList.add('invalid');
  }
  inputRef.classList.add('valid');
});
