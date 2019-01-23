const PubSub = require("../helpers/pub_sub.js");

const SideQuizButtonView = function(element){
  this.element = element;
};

SideQuizButtonView.prototype.bindEvents = function(){
  PubSub.subscribe('SideQuiz:questions-loaded', (evt) => {
    const sideQuiz = evt.detail;
    this.element.addEventListener('click', (evt) => {
      PubSub.publish('SideQuizButtonView:button-selected', sideQuiz);
      console.log('Side Quiz Button Working:', sideQuiz);
    });
  });
}

module.exports = SideQuizButtonView;
