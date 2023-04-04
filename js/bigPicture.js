import { isEventEsc } from './util.js';

const bigPictureSection = document.querySelector('.big-picture');
const bigPicture = bigPictureSection.querySelector('.big-picture__img');
const fullPhoto = bigPicture.querySelector('img');

const body = document.querySelector('body');
const likesCount = document.querySelector('.likes-count');
const commentsCount = document.querySelector('.comments-count');
const socialCaption = document.querySelector('.social__caption');
const listComments =document.querySelector('.social__comments');
const pictureCancel = document.querySelector('#picture-cancel');
const avatarPicture = document.querySelector('.social__picture');
const socialCommentsLoaderBtn = document.querySelector('.social__comments-loader');

export const listPhotoClickHandler = (newPhoto,thumbnail) => {
  thumbnail.addEventListener('click',() => {
    body.classList.add('modal-open');
    bigPictureSection.classList.remove('hidden');
    fullPhoto.src = thumbnail.src;
    avatarPicture.src = newPhoto.url;
    likesCount.textContent =newPhoto.likes;
    commentsCount.textContent = newPhoto.comments.length;
    socialCaption.textContent= newPhoto.description;

    listComments.innerHTML ='';
    socialCommentsLoaderBtn.style.display = 'block';
    const commentsArray = newPhoto.comments;
    for(let i=0; i< 5 ;i++){
      const commentItem = document.createElement('li');
      commentItem.classList.add('social__comment');
      const commentText = document.createElement('p');
      commentText.classList.add('social__text')
      commentText.textContent = commentsArray[i].message;
      commentItem.append(commentText);
      const commentImg =document.createElement('img');
      commentImg.classList.add('.social__picture')
      commentImg.src = commentsArray[i].avatar;
      commentImg.alt = commentsArray[i].name;
      commentItem.append(commentImg);
      listComments.append(commentItem);
    }
    socialCommentsLoaderBtn.addEventListener('click',() =>{
      listComments.innerHTML ='';
      for(let i=5; i< commentsArray.length ;i++){
        const commentItem = document.createElement('li');
        commentItem.classList.add('social__comment');
        const commentText = document.createElement('p');
        commentText.classList.add('social__text')
        commentText.textContent = commentsArray[i].message;
        commentItem.appendChild(commentText);
        const commentImg =document.createElement('img');
        commentImg.classList.add('.social__picture')
        commentImg.src = commentsArray[i].avatar;
        commentImg.alt = commentsArray[i].name;
        commentItem.appendChild(commentImg);
        listComments.appendChild(commentItem);
      }
      socialCommentsLoaderBtn.style.display = 'none';
    });
  });
};

pictureCancel.addEventListener('click',() => {
  bigPictureSection.classList.add('hidden');
});

document.addEventListener('keydown',(evt) =>{
  if(isEventEsc){
    evt.preventDefault();
    bigPictureSection.classList.add('hidden');
  }
})


