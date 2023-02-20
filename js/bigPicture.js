const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = document.querySelector('.big-picture__img');

document.addEventListener('click', (evt) =>{
  bigPicture.classList.remove('hidden');
  bigPictureImg.children.src = evt.target.url;
});



