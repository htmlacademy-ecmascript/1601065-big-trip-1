import NewTaskTripSortView from './trip-sort.js';
import NewTaskTripEventsListView from './trip-events-list.js';
import NewTaskEventView from './event.js';
import { render } from '../render.js';

export default class BoardPresenter {
  boardComponent = new NewTaskTripSortView();
  taskListComponent = new NewTaskTripEventsListView();

  constructor({boardContainer}) {
    this.boardContainer = boardContainer;
  }

  init() {
    render(this.boardComponent, this.boardContainer);
    render(new NewTaskEventView(), this.boardComponent.getElement());
    render(this.taskListComponent, this.boardComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new NewTaskTripEventsListView(), this.taskListComponent.getElement());
    }
  }
}
