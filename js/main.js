// Функция для генерации случайного числа в заданном диапазоне
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Массив с комментариями, из которых будет формироваться случайный комментарий
const commentsText = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

// Массив имён для комментаторов
const names = [
  'Анна',
  'Иван',
  'Ольга',
  'Дмитрий',
  'Светлана',
  'Алексей',
  'Мария',
  'Павел',
  'Елена',
  'Артём',
];

// Функция для генерации случайного комментария
function generateComment(id) {
  const message = commentsText[getRandomNumber(0, commentsText.length - 1)];
  const name = names[getRandomNumber(0, names.length - 1)];
  const avatar = `img/avatar-${getRandomNumber(1, 6)}.svg`;
  return {
    id: id,
    avatar: avatar,
    message: message,
    name: name,
  };
}

// Функция для генерации массива комментариев
function generateComments(count) {
  const comments = [];
  for (let i = 0; i < count; i++) {
    const commentId = getRandomNumber(100, 999);
    comments.push(generateComment(commentId));
  }
  return comments;
}

// Функция для генерации описания фотографии
function generatePhotoDescription(id) {
  const url = `photos/${id}.jpg`;
  const description = `Описание фотографии номер ${id}`;
  const likes = getRandomNumber(15, 200);
  const commentsCount = getRandomNumber(0, 30);
  const comments = generateComments(commentsCount);

  return {
    id: id,
    url: url,
    description: description,
    likes: likes,
    comments: comments,
  };
}

// Функция для генерации массива из 25 объектов
function generatePhotosArray() {
  const photos = [];
  for (let i = 1; i <= 25; i++) {
    photos.push(generatePhotoDescription(i));
  }
  return photos;
}

// Генерация массива с фото
const photosArray = generatePhotosArray();

photosArray();

