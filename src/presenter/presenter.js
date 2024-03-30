import TripSortView from '../view/trip-sort-view.js';
import TripEventsListView from '../view/trip-events-list-view.js';
import EventFormView from '../view/event-form-view.js';
import EventView from '../view/event-view.js';
import { render } from '../render.js';

export default class BoardPresenter {
  sortComponent = new TripSortView();
  taskListComponent = new TripEventsListView();

  constructor({boardContainer, taskModel}) {
    this.boardContainer = boardContainer;
    this.taskModel = taskModel;
  }

  init() {
    this.boardTasks = [...this.taskModel.getTasks()];

    render(this.sortComponent, this.boardContainer);
    render(this.taskListComponent, this.boardContainer);
    render(new EventFormView(), this.taskListComponent.getElement());

    for (let i = 0; i < this.boardTasks.length; i++) {
      render(new EventView({task: this.boardTasks[i]}), this.taskListComponent.getElement());
    }
  }
}
