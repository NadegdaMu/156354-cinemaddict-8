import {filterElement, filterOtherElement} from './template-filter';
import {templateOneFilm} from './template-film';


const filterElements = document.querySelector(`.main-navigation`);
const listFilm = document.querySelector(`.films-list .films-list__container`);
const otherListFilms = document.querySelectorAll(`.films-list--extra .films-list__container`);
const numberFilms = 7;
const numberOtherFilms = 2;

// Функция генерирующая целое число в диапазоне, включая минимальное и максимальное.
const getRandomInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Массив имен фильтров
const nameFilter = [`Favorites`, `History`, `Watchlist`, `All movies`];
const newNameFilter = nameFilter.map((name) => {
  return name.split(` `, 1);
});

// функция по добавлению класса первому элементу
const firstElementFilter = () => {
  const element = document.querySelector(`.main-navigation .main-navigation__item`);
  element.classList.add(`main-navigation__item--active`);
};

// Функция отрисовки фильтров без счетчиков
const renderFilterElements = () => {
  for (let i = 0; i < newNameFilter.length; i++) {
    filterElements.insertAdjacentHTML(`afterBegin`, filterElement(newNameFilter[i][0]));
  }
};

renderFilterElements();
firstElementFilter();

// Функция отрисовки счетчиков у фильтров
const renderAmountFilter = () => {
  const amountFilters = document.querySelectorAll(`.main-navigation__item`);

  for (let q = 0; q < amountFilters.length - 1; q++) {
    if (!amountFilters[q].classList.contains(`main-navigation__item--active`)) {
      amountFilters[q].insertAdjacentHTML(`beforeend`, filterOtherElement(getRandomInRange(1, 50)));
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

renderListFilms(numberFilms, listFilm);
renderListFilms(numberOtherFilms, otherListFilms[0]);
renderListFilms(numberOtherFilms, otherListFilms[1]);

// Обработка кликов по фильтрам и вывод произволного кол-ва фильмов
const allFilterElements = filterElements.querySelectorAll(`.main-navigation__item`);

const filterClickHandler = (event) => {
  for (let i = 0; i < allFilterElements.length; i++) {
    allFilterElements[i].classList.remove(`main-navigation__item--active`);
  }
  event.target.classList.add(`main-navigation__item--active`);
  const awayElement = filterElements.querySelectorAll(`.main-navigation__item-count`);
  awayElement.forEach((el) => el.remove());
  renderAmountFilter();
  listFilm.innerHTML = ``;
  renderListFilms(getRandomInRange(1, 5), listFilm);
};

allFilterElements.forEach((el) => el.addEventListener(`click`, filterClickHandler));
