const PubSub = require('../../helpers/pub_sub.js');
const PlanetQuiz = require('../../models/planet_quiz.js');

const PlanetQuizResultView = function(container){
  this.container = container;
}

PlanetQuizResultView.prototype.bindEvents = function(){
  PubSub.subscribe('ResultView:results-submitted', (evt) => {
    console.log('Counter Result Entering Result View:', evt.detail);
    this.render(evt.detail)
  });
}

PlanetQuizResultView.prototype.render = function(count){
  this.container.innerHTML = '';
  const resultDiv = document.createElement('div')

  const header = document.createElement('h3');
  header.textContent = count;
  resultDiv.appendChild(header);

  this.container.appendChild(resultDiv);
}

module.exports = PlanetQuizResultView;
