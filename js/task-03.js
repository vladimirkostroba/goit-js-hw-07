const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryRef = document.querySelector('#gallery');

const itemRef = images
  .map(item => {
    return `<li class="gallery__item">
      <img src=${item.url} alt=${item.alt} width = "200px" height="150px">
    </li>`;
  })
  .join('');

galleryRef.insertAdjacentHTML('beforebegin', itemRef);

const galleryItemsRef = document.querySelectorAll('.gallery__item');

galleryItemsRef.forEach(item => {
  item.style.listStyle = 'none';
  item.style.marginLeft = '10px';
  item.style.display = 'inline-block';
});
