function checkTheString(string, lenght) {
  return string.length <= lenght;
}

checkTheString('сегоднятепло', 10);
// console.log(checkTheString('проверяемая строка', 20));
// console.log(checkTheString('проверяемая строка', 18));
// console.log(checkTheString('проверяемая строка', 10));

function thePalindrom(palindromString) {
  const string = palindromString.replaceAll(' ', '').toUpperCase();
  for (let i = 0; i < string.length / 2; i++) {
    if (string.at(i) !== string.at(-i - 1)) {
      return false;
    }
  }
  return true;
}

thePalindrom('шалаш');
// console.log(thePalindrom('топот'));
// console.log(thePalindrom('ДовОд'));
// console.log(thePalindrom('Кекс'));
// console.log(thePalindrom('Лёша на полке клопа нашёл '));
