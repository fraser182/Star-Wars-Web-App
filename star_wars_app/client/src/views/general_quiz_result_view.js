const PubSub = require('../helpers/pub_sub.js');
const GeneralQuiz = require('../models/general_quiz.js');

const GeneralQuizResultView = function(container){
  this.container = container;
}

GeneralQuizResultView.prototype.bindEvents = function(){
  PubSub.subscribe('ResultView:results-submitted', (evt) => {
    console.log('Counter Result Entering Result View:', evt.detail);
    this.render(evt.detail)
  });
}

GeneralQuizResultView.prototype.render = function(count){
  this.container.innerHTML = '';
  const resultDiv = document.createElement('div')

  const header = document.createElement('h3');
  header.id = "quiz-score"
  header.textContent = `You got ${count} out of 3`;
  resultDiv.appendChild(header);

  const resultImage = document.createElement('img');
    if (count == 0) {
    resultImage.id = "terrible-score";
  }
    if (count == 1) {
    resultImage.id = "low-score";
  }
    if (count == 2) {
    resultImage.id = "good-score";
  }
    if (count == 3) {
    resultImage.id = "perfect-score";
  }
  resultDiv.appendChild(resultImage);

  this.container.appendChild(resultDiv);
}

module.exports = GeneralQuizResultView;
