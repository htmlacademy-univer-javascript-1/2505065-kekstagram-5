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
