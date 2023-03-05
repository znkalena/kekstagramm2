import{getRandomArrayElement, getRandomNumber} from './util.js';

const messages=['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  ' Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  ' Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?',
];
const names=[
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
  'Helena',
];
const descriptions =[
  'фото1',
  'фото2',
  'фото3',
  'фото4',
];

const COUNT_PHOTOS=25;
const COUNT_COMMENTS = 4;
export const STEP_CHANGE =25;

let i =0;
let j=1;

const createNewComments=()=>{
  const comments = [];
  for(let i =0;i < COUNT_COMMENTS ;i++){
    const comment = {
      id:getRandomNumber(1,200),
      avatar:`img/avatar-${getRandomNumber(1,6)}.png`,
      message:getRandomArrayElement(messages),
      name:getRandomArrayElement(names),
    }
    comments.push(comment);
  }
  return comments
};
const createNewPhoto =()=>{
  return {
    id:i++,
    url:`photos/${j++}.jpg`,
    description:getRandomArrayElement(descriptions),
    likes:getRandomNumber(15,200),
    comments:createNewComments(),
  }
};

export const createNewPhotos = () => new Array(COUNT_PHOTOS).fill(null).map(()=>createNewPhoto());

