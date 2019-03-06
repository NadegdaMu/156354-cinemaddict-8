const film = () => ({
  title: new Set([
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
  ]),
  year: [`2011`, `2015`, `2017`, `2016`, `2018`],
  genre: [
    `комедия`,
    `детектив`,
    `мюзикл`,
    `фантастика`,
    `драмма`
  ],
  posterDir: `images/posters/`,
  posterNames: [
    `accused.jpg`,
    `blackmail.jpg`,
    `blue-blazes.jpg`,
    `fuga-da-new-york.jpg`,
    `moonrise.jpg`,
    `three-friends.jpg`],
  description: [
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
  ],
  comments: [`32`, `65`, `84`, `96`, `25`],
  getTitle() {
    return [...this.title][Math.floor(Math.random() * this.title.size)];
  },
  getYear() {
    return this.year[Math.floor(Math.random() * this.year.length)];
  },
  getDuration() {
    return {
      hour: Math.round(Math.random() * 10),
      minutes: Math.round(Math.random() * 59)
    };
  },
  getGenre() {
    return this.genre[Math.floor(Math.random() * this.year.length)];
  },
  getPoster() {
    let i = Math.floor(Math.random() * this.posterNames.length);
    return this.posterDir + `${this.posterNames[i]}`;
  },
  getDescription() {
    const number = Math.floor(Math.random() * 3);
    let descriptionFilm = ``;
    for (let k = 0; k <= number; k++) {
      descriptionFilm += this.description[Math.floor(Math.random() * this.description.length)];
    }
    return descriptionFilm;
  },
  getComments() {
    return this.comments[Math.floor(Math.random() * this.comments.length)];
  },
  getRating() {
    let i = Math.random() * 10;
    return i.toFixed(1);
  },
  getFilmElement() {
    return {
      title: this.getTitle(),
      rating: this.getRating(),
      year: this.getYear(),
      duration: this.getDuration(),
      genre: this.getGenre(),
      poster: this.getPoster(),
      description: this.getDescription(),
      comments: this.getComments()
    };
  }
});

export {film};
