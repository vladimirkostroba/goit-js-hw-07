const itemCategoriesRef = document.querySelectorAll('.item');

console.log(`В списке ${itemCategoriesRef.length} категории`);

itemCategoriesRef.forEach(el =>
  console.log(
    `Категория:${el.querySelector('h2').textContent}
     Количество элементов:${el.querySelectorAll('li').length}`,
  ),
);
