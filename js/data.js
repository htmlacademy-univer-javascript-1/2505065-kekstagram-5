import { createRandom } from './util.js';

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const names = ['Артемий', 'Валерия', 'Георгий', 'Марина', 'Денис', 'Анна'];

const createComment = (id) => ({
  id,
  avatar: `img/avatar-${createRandom(1, 6)}.svg`,
  message: messages[createRandom(0, messages.length - 1)],
  name: names[createRandom(0, names.length - 1)],
});

export const createPhotos = () => {
  const photos = [];

  for (let i = 1; i <= 25; i++) {
    const likes = createRandom(15, 200);
    const count = createRandom(0, 30);

    const comments = [];

    for (let k = 1; k <= count; k++) {
      comments.push(createComment(k));
    }

    photos.push({
      id: i,
      url: `photos/${i}.jpg`,
      description: `Какое-то описание фотографии ${i}`,
      likes: likes,
      comments: comments,
    });
  }
  return photos;
};
