import {createElement} from '../render.js';

function createNewTaskSortingTemplate() {
  return '<p class="trip-events__msg">Loading...</p>';
}

export default class NewTaskSortingView {
  getTemplate() {
    return createNewTaskSortingTemplate();
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
