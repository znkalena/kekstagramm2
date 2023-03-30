const COUNT_PHOTOS=25;

const tamplatePhotos = document.querySelector('#picture').content.querySelector('.picture');
const listPhotos = document.querySelector('.pictures');

fetch('https://23.javascript.pages.academy/kekstagram/data').then((response)=>response.json()).then((newPhotos)=>
{createPreviews(newPhotos.slice(0,COUNT_PHOTOS))});

const createPreview = ({url,comments,likes}) => {
  const photoElement = tamplatePhotos.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__comments').innerText = comments.length;
  photoElement.querySelector('.picture__likes').innerText = likes;
  return photoElement;
};

const createPreviews = (newPhotos) => {
  let ListPhotosFragment = document.createDocumentFragment();
  newPhotos.forEach((photo) => {
    ListPhotosFragment.appendChild(createPreview(photo));
  });
  listPhotos.appendChild(ListPhotosFragment);
};




