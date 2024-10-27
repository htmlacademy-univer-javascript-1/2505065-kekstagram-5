// Функция для проверки длины строки
const isLengthValid = function (inputString, maxLength) {
  return inputString.length <= maxLength;
};

isLengthValid('проверяемая строка', 25);
isLengthValid('sds', 3);

// Функция для проверки, является ли строка палиндромом
const checkPalindrome = function (inputString) {
  // Нормализация строки: удаление пробелов и приведение к нижнему регистру
  const cleanedString = inputString.replaceAll(' ', '').toLowerCase();
  let reversedString = '';

  // Переворот строки
  for (let index = cleanedString.length - 1; index >= 0; index--) {
    reversedString += cleanedString[index];
  }

  // Сравнение оригинальной и перевёрнутой строки
  return cleanedString === reversedString;
};

checkPalindrome('топот');

