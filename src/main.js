import TripInfoView from './view/trip-info-view.js';
import TripFiltersView from './view/trip-filters-view.js';
import BoardPresenter from './presenter/presenter.js';
import {render, RenderPosition} from './render.js';
import TasksModel from './model/tasks-model.js';

const siteHeaderElement = document.querySelector('.trip-main');
const siteFiltersElement = document.querySelector('.trip-controls__filters');
const boardElement = document.querySelector('.trip-events');
const tasksModel = new TasksModel();
const boardPresenter = new BoardPresenter({boardContainer: boardElement,
  tasksModel,
});

render(new TripFiltersView(), siteFiltersElement);
render(new TripInfoView(), siteHeaderElement, RenderPosition.AFTERBEGIN);

boardPresenter.init();
tasksModel.init();
