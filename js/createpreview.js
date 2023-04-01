

const tamplatePhotos = document.querySelector('#picture').content.querySelector('.picture');
const listPhotos = document.querySelector('.pictures');



const createPreview = ({url,comments,likes}) => {
  const photoElement = tamplatePhotos.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__comments').innerText = comments.length;
  photoElement.querySelector('.picture__likes').innerText = likes;
  return photoElement;
};

export const createPreviews = (newPhotos) => {
  newPhotos.forEach((photo) => {
    listPhotos.append(createPreview(photo));
  });
};




