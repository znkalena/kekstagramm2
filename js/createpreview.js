import { createNewPhotos } from './data.js';

const tamplatePhotos = document.querySelector('#picture').content.querySelector('.picture');
const listPhotos = document.querySelector('.pictures');

const newPhotos = createNewPhotos();

const createPreview = ({url,comments,likes}) => {
  const photoElement = tamplatePhotos.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__comments').innerText = comments.length;
  photoElement.querySelector('.picture__likes').innerText = likes;
  return photoElement;
};

const createPreviews = () => {
  let ListPhotosFragment = document.createDocumentFragment();
  newPhotos.forEach((photo) => {
    ListPhotosFragment.appendChild(createPreview(photo));
  });
  listPhotos.appendChild(ListPhotosFragment);
};

export {createPreviews};


