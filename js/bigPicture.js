import { isEventEsc } from './util.js';
import { newPhotos } from './createpreview.js';


const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = document.querySelector('.big-picture__img');
const fullPhoto = bigPictureImg.querySelector('img');

const pictureImges = document.querySelectorAll('.picture__img');
const pictureLikes = document.querySelectorAll('.picture__likes');
const pictureComments =document.querySelectorAll('.picture__comments');
const pictureCancel = document.querySelector('#picture-cancel');
const likesCount = document.querySelector('.likes-count');
const commentsCount = document.querySelector('.comments-count');
const socialCommentCount =document.querySelector('.social__comment-count');
const socialText =document.querySelectorAll('.social__text');
const socialCaption =document.querySelector('.social__caption');
const socialPictures = document.querySelectorAll('.social__picture');
const socialCommentsLoader = document.querySelector('.social__comments-loader');


const bigPictureHandler = (pictureImg,pictureLike,pictureComment,newPhoto) => {
  pictureImg.addEventListener('click', () =>{
    bigPicture.classList.remove('hidden');
    socialCommentCount.classList.add('.hidden');
    socialCommentsLoader.classList.add('.hidden');
    fullPhoto.src = pictureImg.src;
    likesCount.textContent = pictureLike.textContent;
    commentsCount.textContent = pictureComment.textContent;
    socialCaption.textContent = newPhoto.description;
    for(let i=0;i<socialText.length;i++){
      socialText[i].textContent = newPhoto.comments[i].message;
      socialPictures[i].url = newPhoto.comments[i].avatar;
      socialPictures[i].alt = newPhoto.comments[i].name;
    }

    document.addEventListener('keydown',(evt) =>{
      if(isEventEsc){
        evt.preventDefault();
        bigPicture.classList.add('hidden');
      }
    })
  });
};

for(let i=0;i<pictureImges.length;i++){
  bigPictureHandler(pictureImges[i],pictureLikes[i],pictureComments[i],newPhotos[i])
}

pictureCancel.addEventListener('click',() => {
  bigPicture.classList.add('hidden');
});

