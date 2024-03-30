import {getRandomTask} from '../mock/events.js';

const EVENT_COUNT = 3;

export default class EventModel {
  event = Array.from({length: EVENT_COUNT}, getRandomTask);

  getTasks() {
    return this.event;
  }
}
