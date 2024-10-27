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

=======
function isStringValidLength(str, maxLength) {
  return str.length <= maxLength;
}

function isPalindrome(str) {
    // Нормализуем строку: убираем пробелы и приводим к нижнему регистру
    const normalizedStr = str.replaceAll(" ", "").toLowerCase();

    // Переворачиваем нормализованную строку
    let reversedStr = "";
    for (let i = normalizedStr.length - 1; i >= 0; i--) {
        reversedStr += normalizedStr[i];
    }

    // Сравниваем нормализованную строку с перевёрнутой
    return normalizedStr === reversedStr;
}
