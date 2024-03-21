import {createElement} from '../render.js';

function createNewTaskTripEventsMsgTemplate() {
  return '<p class="trip-events__msg">Loading...</p>';
}

export default class NewTaskTripEventsMsgView {
  getTemplate() {
    return createNewTaskTripEventsMsgTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
