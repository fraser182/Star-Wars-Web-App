const PubSub = require('../helpers/pub_sub.js');

const FilmsButtonView = function(element){
  this.element = element;
};

FilmsButtonView.prototype.bindEvents = function(){
  PubSub.subscribe('Films:films-loaded', (evt) => {
    const films = evt.detail;

    const sortedFilms = films.sort((a, b) => {
      return a.episode_id - b.episode_id
    })

    this.element.addEventListener('click', (evt) => {
      PubSub.publish('FilmsButtonView:button-selected', sortedFilms);
      // console.log('Films Button Working:', films);
    });
  });
}

module.exports = FilmsButtonView;
