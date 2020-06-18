const decrRef = document.querySelector('button[ data-action="decrement"]');

const incrRef = document.querySelector('button[ data-action="increment"]');

const valueRef = document.querySelector('#value');

let input = 0;

decrRef.addEventListener('click', () => {
  input -= 1;
  valueRef.textContent = input;
});

incrRef.addEventListener('click', () => {
  input += 1;
  valueRef.textContent = input;
});
