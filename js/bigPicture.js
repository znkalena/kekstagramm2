import { isEventEsc } from './util.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img');
const photoImg = bigPictureImg.querySelector('img');
const body = document.querySelector('body');

const pictureCancel = document.querySelector('#picture-cancel');
const likesCount = document.querySelector('.likes-count');
const socialComments =document.querySelectorAll('.social__comment')
const commentsCount = document.querySelector('.comments-count');
const socialCommentCount =document.querySelector('.social__comment-count');
const socialCaption =document.querySelector('.social__caption');
const socialCommentsLoader = document.querySelector('.social__comments-loader');



const bigPictureHandler = (prevew) => {
  body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');
  socialCommentCount.classList.add('.hidden');
  socialCommentsLoader.classList.add('.hidden');
  photoImg.src = prevew.src;
  likesCount.textContent = prevew.likes;
  socialComments.textContent=prevew.comments;
  commentsCount.textContent = prevew.comments;
  socialCaption.textContent = prevew.description;
};

document.addEventListener('click',(evt) => {
  if(evt.target.attributes.class.value === 'picture__img')
    bigPictureHandler(evt.target);
});


pictureCancel.addEventListener('click',() => {
  bigPicture.classList.add('hidden');
});

document.addEventListener('keydown',(evt) =>{
  if(isEventEsc){
    evt.preventDefault();
    bigPicture.classList.add('hidden');
  }
})



