import dayjs from 'dayjs';

const DATE_FORMAT = 'MMMM D';

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function humanizeTaskDueDate(dueDate) {
  return dueDate ? dayjs(dueDate).format(DATE_FORMAT) : '';
}

export {getRandomArrayElement, humanizeTaskDueDate};