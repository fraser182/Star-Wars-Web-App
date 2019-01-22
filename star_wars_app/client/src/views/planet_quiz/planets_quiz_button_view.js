const PubSub = require('../../helpers/pub_sub.js');

const PlanetQuizButtonView = function(element){
  this.element = element;
};

PlanetQuizButtonView.prototype.bindEvents = function(){
  PubSub.subscribe('PlanetQuiz:questions-loaded', (evt) => {
    const planetQuiz = evt.detail;
    this.element.addEventListener('click', (evt) => {
      PubSub.publish('PlanetQuizButtonView:button-selected', planetQuiz);
      console.log('Planet Quiz Button Working:', planetQuiz);
    });
  });
}

module.exports = PlanetQuizButtonView;
