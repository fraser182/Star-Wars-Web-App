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
  const resultGeneralQuizDiv = document.createElement('div')

  const generalHeader = document.createElement('h3');
  generalHeader.className = "general-quiz-score"

  resultGeneralQuizDiv.appendChild(generalHeader);

  const resultImage = document.createElement('img');
    if (count === 0) {
    generalHeader.id = "bad-score";
    generalHeader.textContent = `The force is not with you: you got ${count} out of 3`;
  }
    if (count === 1) {
    generalHeader.id = "ok-score";
    generalHeader.textContent = `You are no Jedi: you got ${count} out of 3`;
  }
    if (count === 2) {
    generalHeader.id = "better-score";
    generalHeader.textContent = `You will never turn to the dark side: you got ${count} out of 3`;
  }
    if (count === 3) {
    generalHeader.id = "great-score";
    generalHeader.textContent = `You are the Chosen One: you got ${count} out of 3`;
  }
  console.log('resultImage', resultImage);
  console.log('resultDiv', resultDiv);
  resultGeneralQuizDiv.appendChild(resultImage);

  this.container.appendChild(resultGeneralQuizDiv);
}

module.exports = GeneralQuizResultView;
