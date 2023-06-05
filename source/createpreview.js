

const tamplatePhotos = document.querySelector('#picture').content.querySelector('.picture');
const listPhotos = document.querySelector('.pictures');
const COUNT_PHOTOS =25;

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

export const deletePreviews =() => {
  for(let i=0;i <COUNT_PHOTOS;i++){
    let link =listPhotos.querySelector('.picture');
    let img = listPhotos.querySelector('.picture__img');
    link.remove(img);
  }
}
export {listPhotos};



