import TripInfoView from './view/trip-info-view.js';
import TripFiltersView from './view/trip-filters-view.js';
import BoardPresenter from './view/presenter-view.js';
import {render, RenderPosition} from './render.js';

const siteHeaderElement = document.querySelector('.trip-main');
const siteFiltersElement = document.querySelector('.trip-controls__filters');
const boardElement = document.querySelector('.trip-events');
const boardPresenter = new BoardPresenter({boardContainer: boardElement});

render(new TripFiltersView(), siteFiltersElement);
render(new TripInfoView(), siteHeaderElement, RenderPosition.AFTERBEGIN);

boardPresenter.init();
