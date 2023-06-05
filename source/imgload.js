const inputLoading = document.querySelector('#upload-file');
const divPreview =document.querySelector('.img-upload__preview');
const imgPreview =divPreview.querySelector('img');
const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const SCALE_PREVIEW = 0.55;

inputLoading.addEventListener('change',() => {
  imgPreview.style.scale = SCALE_PREVIEW;
  const file = inputLoading.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => {
    return fileName.endsWith(it);
  });
  if(matches){
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      imgPreview.src = reader.result;
    });
    reader.readAsDataURL(file);
  }
});
export {imgPreview};

