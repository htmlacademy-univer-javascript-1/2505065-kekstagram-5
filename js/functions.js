/* eslint-disable no-console */

function checkLengthString(string, maxLength) {
  return string.length <= maxLength;
}

console.log(checkLengthString('привет', 10));
console.log(checkLengthString('привет', 5));

function checkPalindrome(string) {
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(checkPalindrome('привет'));
console.log(checkPalindrome('топот'));

function meetingDuringWorkingHours(startWork, endWork, startMeeting, duration) {
  const timeToMinutes = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  };

  const workStart = timeToMinutes(startWork);
  const workEnd = timeToMinutes(endWork);
  const meetingStart = timeToMinutes(startMeeting);
  const meetingEnd = meetingStart + duration;

  return meetingStart >= workStart && meetingEnd <= workEnd;
}

console.log(meetingDuringWorkingHours('10:00', '12:00', '11:00', 120));
console.log(meetingDuringWorkingHours('10:00', '12:00', '11:00', 60));
