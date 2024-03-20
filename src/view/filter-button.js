import {createElement} from '../render.js';

function createNewTaskFilterButtonTemplate() {
  return '<button class="visually-hidden" type="submit">Accept filter</button>';
}

export default class NewTaskFilterButtonView {
  getTemplate() {
    return createNewTaskFilterButtonTemplate();
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
