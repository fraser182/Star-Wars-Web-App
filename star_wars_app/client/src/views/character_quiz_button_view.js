const PubSub = require("../helpers/pub_sub.js");

const CharacterQuizButtonView = function(element){
  this.element = element;
};

CharacterQuizButtonView.prototype.bindEvents = function(){
  PubSub.subscribe('CharacterQuiz:questions-loaded', (evt) => {
    const characterQuiz = evt.detail;
    this.element.addEventListener('click', (evt) => {
      PubSub.publish('CharacterQuizButtonView:button-selected', characterQuiz);
      console.log('Character Quiz Button Working:', characterQuiz);
    });
  });
}

module.exports = CharacterQuizButtonView
