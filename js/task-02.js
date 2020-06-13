const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients');

ingredientsRef.append(
  ...ingredients.map(product => {
    const ingredientsItem = document.createElement('li');
    ingredientsItem.classList.add('item');
    ingredientsItem.textContent = product;

    return ingredientsItem;
  }),
);

console.log(ingredientsRef);
