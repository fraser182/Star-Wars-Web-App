const PubSub = require('../helpers/pub_sub.js');
const CharacterQuiz = require('../models/character_quiz.js');

const CharacterQuizResultView = function(container){
  this.container = container;
}

CharacterQuizResultView.prototype.bindEvents = function(){
  PubSub.subscribe('ResultView:results-submitted', (evt) => {
    console.log('Counter Result Entering Result View:', evt.detail);
    this.render(evt.detail)
  });
}

CharacterQuizResultView.prototype.render = function(count){
  this.container.innerHTML = '';
  const resultDiv = document.createElement('div')

  const header = document.createElement('h3');
  header.className = "quiz-score"

  resultDiv.appendChild(header);

  const resultImage = document.createElement('img');
    if (count === 0) {
    header.id = "terrible-score";
    header.textContent = `The force is not with you: you got ${count} out of 3`;
  }
    if (count === 1) {
    header.id = "low-score";
    header.textContent = `You are no Jedi: you got ${count} out of 3`;
  }
    if (count === 2) {
    header.id = "good-score";
    header.textContent = `You will never turn to the dark side: you got ${count} out of 3`;
  }
    if (count === 3) {
    header.id = "perfect-score";
    header.textContent = `You are the Chosen One: you got ${count} out of 3`;
  }
  console.log('resultImage', resultImage);
  console.log('resultDiv', resultDiv);
  resultDiv.appendChild(resultImage);

  this.container.appendChild(resultDiv);
}

module.exports = CharacterQuizResultView;
