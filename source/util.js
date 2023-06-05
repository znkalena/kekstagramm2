export const getRandomNumber = (min,max) => {
  if(min <0 || max <0){
    return -1;
  }
  if(min>max){
    [min,max] = [max,min];
  }
  return Math.floor((Math.random() * (max - min) + min));
};



export const checkLengthStr = (str,maxLength) => str.length <= maxLength;

export const getRandomArrayElement=(elements)=>{
  return elements[getRandomNumber(0,elements.length-1)]
};

const isEventEsc = (evt) =>{
  return evt.keyCode ===27;
}
const TIME_ERROR = 5000;

export const showError =(message) => {
  const conteinerShow = document.createElement('div');
  conteinerShow.style.position = 'absolute';
  conteinerShow.style.zIndex = 100;
  conteinerShow.style.left = 0;
  conteinerShow.style.top = 0;
  conteinerShow.style.right = 0;
  conteinerShow.style.padding = '10px 3px';
  conteinerShow.style.fontSize = '30px';
  conteinerShow.style.backgroundColor = 'red';

  conteinerShow.textContent = message;

  document.body.append(conteinerShow);

  setTimeout(() => {
    conteinerShow.remove();
  }, TIME_ERROR);
};

export {isEventEsc};
