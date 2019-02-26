import {filterElement, filterOtherElement} from './template-filter';
import {templateOneFilm} from './template-film';


const filterElements = document.querySelector(`.main-navigation`);
const listFilm = document.querySelector(`.films-list .films-list__container`);
const otherListFilms = document.querySelectorAll(`.films-list--extra .films-list__container`);
const NUMBER_FILMS = 7;
const NUMBER_OTHER_FILMS = 2;

// Функция генерирующая целое число в диапазоне, включая минимальное и максимальное.
const getRandomInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Массив имен фильтров
const filters = [
  {
    id: `favorites`,
    title: `Favorites`
  },
  {
    id: `history`,
    title: `History`
  },
  {
    id: `watchlist`,
    title: `Watchlist`
  },
  {
    id: `all`,
    title: `All movies`
  }
];

// функция по добавлению класса первому элементу
const firstElementFilter = () => {
  const element = document.querySelector(`.main-navigation .main-navigation__item`);
  element.classList.add(`main-navigation__item--active`);
};

// Функция отрисовки фильтров без счетчиков
const renderFilterElements = () => {
  for (const filter of filters) {
    filterElements.insertAdjacentHTML(`afterBegin`, filterElement(filter.id, filter.title));
  }
};

renderFilterElements();
firstElementFilter();

// Функция отрисовки счетчиков у фильтров
const renderAmountFilter = () => {
  const amountFilters = document.querySelectorAll(`.main-navigation__item`);
  for (const amountFilter of amountFilters) {
    if (!amountFilter.classList.contains(`main-navigation__item--active`)) {
      amountFilter.insertAdjacentHTML(`beforeend`, filterOtherElement(getRandomInRange(1, 50)));
    }
  }

};

renderAmountFilter();

// Функция отрисовки карточки фильмов
const renderListFilms = (number, el) => {
  for (let k = 0; k < number; k++) {
    el.insertAdjacentHTML(`beforeend`, templateOneFilm());
  }
};

renderListFilms(NUMBER_FILMS, listFilm);
renderListFilms(NUMBER_OTHER_FILMS, otherListFilms[0]);
renderListFilms(NUMBER_OTHER_FILMS, otherListFilms[1]);

// Обработка кликов по фильтрам и вывод произволного кол-ва фильмов
const allFilterElements = filterElements.querySelectorAll(`.main-navigation__item`);

const filterClickHandler = () => {
  listFilm.innerHTML = ``;
  renderListFilms(getRandomInRange(1, 5), listFilm);
};

allFilterElements.forEach((el) => el.addEventListener(`click`, filterClickHandler));
