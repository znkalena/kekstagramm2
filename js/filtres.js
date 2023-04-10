import { deletePreviews } from './createpreview.js';
import { getRandomArrayElement } from './util.js';


const COUNT_PHOTOS =25;
const filterRandomBtn = document.querySelector('#filter-random');
const filterMuchCommentsBtn =document.querySelector('#filter-discussed');
const filterDefaultBtn =document.querySelector('#filter-default');
let muchCommentsPhotos;
let defaultPhotos;
let randomPhotos=[];

export const getRandomPhotos = (cb,newPhotos) => {
  filterRandomBtn.addEventListener('click', () => {
    filterRandomBtn.classList.add('img-filters__button--active');
    filterDefaultBtn.classList.remove('img-filters__button--active');
    filterMuchCommentsBtn.classList.remove('img-filters__button--active');
    deletePreviews();
    newPhotos.slice();
    for(let i=0;i < COUNT_PHOTOS;i++){
      const randomPhoto= getRandomArrayElement(newPhotos);
      randomPhotos.push(randomPhoto);
    } randomPhotos.slice(0,COUNT_PHOTOS);
    cb();
  })
};

const comparePhotos =(newPhotoA,newPhotoB) =>{
  const rankA = newPhotoA.comments.length;
  const rankB = newPhotoB.comments.length;
  return rankB-rankA;
};

export const getPhotosWithMuchComments = (cb,newPhotos)=> {
  filterMuchCommentsBtn.addEventListener('click',() => {
    filterMuchCommentsBtn.classList.add('img-filters__button--active');
    filterRandomBtn.classList.remove('img-filters__button--active');
    filterDefaultBtn.classList.remove('img-filters__button--active');
    deletePreviews();
    muchCommentsPhotos =  newPhotos.slice().sort(comparePhotos).slice(0,COUNT_PHOTOS);
    cb();
  })
};

export const getDefaultPhotos =(cb,newPhotos) => {
  filterDefaultBtn.addEventListener('click',() =>{
    filterDefaultBtn.classList.add('img-filters__button--active');
    filterMuchCommentsBtn.classList.remove('img-filters__button--active');
    filterRandomBtn.classList.remove('img-filters__button--active');
    deletePreviews();
    defaultPhotos = newPhotos.slice(0,COUNT_PHOTOS);
    cb();
  })

};
export {muchCommentsPhotos,defaultPhotos,randomPhotos};
