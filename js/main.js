const TOTAL_IMAGES = 25;
const LIKES_MIN = 15;
const LIKES_MAX = 200;
const TOTAL_AVATARS = 6;
const MAX_COMMENTS_PER_IMAGE = 30;
const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const DESCRIPTIONS = [
  'Закат, который невозможно забыть! #Природа #Вечер',
  'Лучший рецепт недели — обязательно попробуйте! #Рецепт #Кулинария',
  'Морской бриз и солнце — идеальные моменты! #Пляж #Отдых',
  'Цветы — волшебные создания! #Природа #Цветы',
  'Готовность к новым открытиям! #Путешествия #АктивныйОтдых',
  'Начало дня с ароматного кофе. #Кофе #Утро',
  'Творчество — это полет фантазии! #Арт #Творчество',
  'Пушистый друг всегда поднимает настроение! #Питомцы #Любовь',
];
const USER_NAMES = [
  'Олег',
  'Семён',
  'Анжела',
  'Людмила',
  'Глеб',
  'Иван',
  'Эдик',
];

const randomIntInRange = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.floor(Math.random() * (upper - lower + 1)) + lower;
  return result;
};

const pickRandomElement = (items) =>
  items[randomIntInRange(0, items.length - 1)];

const createIdGenerator = () => {
  let lastGeneratedId = 0;

  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const generateCommentId = createIdGenerator();

const createMessage = () =>
  Array.from({ length: randomIntInRange(1, 2) }, () =>
    pickRandomElement(COMMENTS)
  ).join('');

const makeComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${randomIntInRange(1, TOTAL_AVATARS)}.svg`,
  message: createMessage(),
  name: pickRandomElement(USER_NAMES),
});

const createImageData = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  descriptions: pickRandomElement(DESCRIPTIONS),
  likes: randomIntInRange(LIKES_MIN, LIKES_MAX),
  comments: Array.from(
    { length: randomIntInRange(0, MAX_COMMENTS_PER_IMAGE) },
    makeComment
  ),
});

const generateImageCollection = () =>
  Array.from({ length: TOTAL_IMAGES }, (_, index) => createImageData(index + 1));

generateImageCollection();
