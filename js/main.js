import { createPhotos } from './data.js';
import { renderMiniatures } from './miniature.js';
import { openBigPicture } from './fullSizeImage.js';
const photos = createPhotos();
renderMiniatures(createPhotos());

document.querySelector('.pictures').addEventListener('click', (event) => {
  const miniature = event.target.closest('.picture');
  if (miniature) {
    const pictureId = Number(miniature.dataset.id);
    const pictureData = photos.find((picture) => picture.id === pictureId);
    openBigPicture(pictureData);
  }
});
