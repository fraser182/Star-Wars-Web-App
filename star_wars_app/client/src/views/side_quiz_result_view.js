const PubSub = require('../helpers/pub_sub.js');
const SideQuiz = require('../models/side_quiz.js');

const SideQuizResultView = function(container){
  this.container = container;
}

SideQuizResultView.prototype.bindEvents = function(){
  PubSub.subscribe('ResultView:results-submitted', (evt) => {
    console.log('Counter Result Entering Result View:', evt.detail);
    this.render(evt.detail)
  });
}

SideQuizResultView.prototype.render = function(count){
  this.container.innerHTML = '';
  const resultDiv = document.createElement('div')

  const header = document.createElement('h3');
  header.className = "quiz-score"

  resultDiv.appendChild(header);

  const resultImage = document.createElement('img');
    if (count === 0) {
    header.id = "terrible-score";
    header.textContent = `JEDI: You are pure and clean like the Jedi, be proud!`;
  }
    if (count === 1) {
    header.id = "low-score";
    header.textContent = `JEDI: You posses temptation! But you are not lost yet...`;
  }
    if (count === 2) {
    header.id = "good-score";
    header.textContent = `EMPIRE: You have joined the Dark Side, you have a taste for evil!`;
  }
    if (count === 3) {
    header.id = "perfect-score";
    header.textContent = `EMPIRE: Dear, God...You must be stopped, you have world taking intentions!`;
  }
  console.log('resultImage', resultImage);
  console.log('resultDiv', resultDiv);
  resultDiv.appendChild(resultImage);

  this.container.appendChild(resultDiv);
}

module.exports = SideQuizResultView;
