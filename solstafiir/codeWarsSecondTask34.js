const marksArray = [8, 6, 11, 10, 1, 11];

function getAverage(marks) {
  if (marks.length !== 0) {
    return Math.floor(marks.reduce((a, b) => a + b) / marks.length);
  } else {
    return;
  }
}
getAverage(marksArray);
