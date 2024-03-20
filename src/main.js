import NewTaskFormView from './view/trip-filters.js';
import NewTaskSortingView from './view/trip-events-msg.js';
import NewTaskFilterButtonView from './view/filter-button.js';
import {render} from './render.js';

const siteMainElement = document.querySelector('.trip-main');
const siteFormElement = siteMainElement.querySelector('.trip-controls__filters');
const siteFilterElement = siteFormElement.querySelector('.trip-filters');
const siteSortingElement = document.querySelector('.trip-events');

render(new NewTaskFormView(), siteFormElement);
render(new NewTaskSortingView(), siteSortingElement);
// render(new NewTaskFilterButtonView(), siteFormElement);
