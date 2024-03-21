import NewTaskTripInfoView from './view/trip-info.js';
import NewTaskFormView from './view/trip-filters.js';
import NewTaskFilterButtonView from './view/filter-button.js';
import BoardPresenter from './view/presenter.js';
import {render} from './render.js';

const siteMainElement = document.querySelector('.trip-main');
const siteFormElement = siteMainElement.querySelector('.trip-controls__filters');
const siteSortingElement = document.querySelector('.trip-events');
const boardPresenter = new BoardPresenter({boardContainer: siteSortingElement});

render(new NewTaskTripInfoView(), siteMainElement);
render(new NewTaskFormView(), siteFormElement);
render(new NewTaskFilterButtonView(), siteFormElement);

boardPresenter.init();
