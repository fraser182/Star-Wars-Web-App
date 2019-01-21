const PubSub = require('../helpers/pub_sub.js');

const PlanetsQuizButtonView = function(element){
  this.element = element;
};

PlanetsQuizButtonView.prototype.bindEvents = function(){
  PubSub.subscribe('PlanetsQuiz:planets-quiz-loaded', (evt) => {
    const planetsQuiz = evt.detail;
    this.element.addEventListener('click', (evt) => {
      PubSub.publish('PlanetsQuizButtonView:button-selected', planetsQuiz);
      console.log('Planets Quiz Button Working:', planetsQuiz);
    });
  });
}

module.exports = PlanetsQuizButtonView;
