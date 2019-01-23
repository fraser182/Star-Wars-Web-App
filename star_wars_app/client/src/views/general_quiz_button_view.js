const PubSub = require("../helpers/pub_sub.js");

const GeneralQuizButtonView = function(element){
  this.element = element;
};

GeneralQuizButtonView.prototype.bindEvents = function(){
  PubSub.subscribe('GeneralQuiz:questions-loaded', (evt) => {
    const generalQuiz = evt.detail;
    this.element.addEventListener('click', (evt) => {
      PubSub.publish('GeneralQuizButtonView:button-selected', generalQuiz);
      console.log('General Quiz Button Working:', generalQuiz);
    });
  });
}

module.exports = GeneralQuizButtonView
