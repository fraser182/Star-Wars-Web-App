const PubSub = require('../helpers/pub_sub.js');
const FilmDetailView = require('./film_detail_view.js');
const FilmsButtonView = require('./films_button_view.js');

const FilmsListView = function(container){
  this.container = container;
};

FilmsListView.prototype.bindEvents = function(){
  PubSub.subscribe('FilmsButtonView:button-selected', (evt) => {
    this.container.innerHTML= '';
    console.log('Films List Working:', evt.detail);
    this.render(evt.detail)
  });
}

FilmsListView.prototype.render = function(films){
  films.forEach((film) => {
    const filmDetail = new FilmDetailView();
    const filmDiv = filmDetail.createFilmDetail(film);
    this.container.appendChild(filmDiv);
  });
}


module.exports = FilmsListView;
