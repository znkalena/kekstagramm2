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


