import TripSortView from './trip-sort-view.js';
import TripEventsListView from './trip-events-list-view.js';
import EventFormView from './event-form-view.js';
import EventView from './event-view.js';
import { render } from '../render.js';

export default class BoardPresenter {
  sortComponent = new TripSortView();
  taskListComponent = new TripEventsListView();

  constructor({boardContainer}) {
    this.boardContainer = boardContainer;
  }

  init() {
    render(this.sortComponent, this.boardContainer);
    render(this.taskListComponent, this.boardContainer);
    render(new EventFormView(), this.taskListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new EventView(), this.taskListComponent.getElement());
    }
  }
}
