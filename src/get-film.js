const title = new Set([
  `В ждазе только девушки`,
  `Молодая жена`,
  `Дело было в Пенькове`,
  `Джентельмены удачи`,
  `Фрося бурлакова`,
  `Такси`,
  `Дюна`,
  `Семейка Адамс`,
  `Фетиль`,
  `Аватар`,
  `Воспитание жестокости у женщин и собак`,
  `Тонкая штучка`,
  `Сильва`,
  `Летучая мыш`,
  `Собака на сене`
]);

const year = [`2011`, `2015`, `2017`, `2016`, `2018`];

const genre = [
  `комедия`,
  `детектив`,
  `мюзикл`,
  `фантастика`,
  `драмма`
];

const posterDir = `images/posters/`;

const posterNames = [
  `accused.jpg`,
  `blackmail.jpg`,
  `blue-blazes.jpg`,
  `fuga-da-new-york.jpg`,
  `moonrise.jpg`,
  `three-friends.jpg`
];

const description = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`
];

const comments = [`32`, `65`, `84`, `96`, `25`];

const getTitle = () => {
  return [...title][Math.floor(Math.random() * title.size)];
};

const getYear = () => {
  return year[Math.floor(Math.random() * year.length)];
};

const getDuration = () => {
  return {
    hour: Math.round(Math.random() * 10),
    minutes: Math.round(Math.random() * 59)
  };
};

const getGenre = () => {
  return genre[Math.floor(Math.random() * year.length)];
};

const getPoster = () => {
  let i = Math.floor(Math.random() * posterNames.length);
  return posterDir + `${posterNames[i]}`;
};

const getDescription = () => {
  const number = Math.floor(Math.random() * 3);
  let descriptionFilm = ``;
  for (let k = 0; k <= number; k++) {
    descriptionFilm += description[Math.floor(Math.random() * description.length)];
  }
  return descriptionFilm;
};

const getComments = () => {
  return comments[Math.floor(Math.random() * comments.length)];
};

const getRating = () => {
  let i = Math.random() * 10;
  return i.toFixed(1);
};

const getFilmElement = () => {
  return {
    title: getTitle(),
    rating: getRating(),
    year: getYear(),
    duration: getDuration(),
    genre: getGenre(),
    poster: getPoster(),
    description: getDescription(),
    comments: getComments()
  };
};

export {getFilmElement};
