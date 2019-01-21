const PubSub = require("../helpers/pub_sub.js");

const generalQuizButtonView = function(element){
  this.element = element;
};

generalQuizButtonView.prototype.bindEvents = function(){

  this.element.addEventListener('click', (evt) => {
    PubSub.publish('generalQuizButtonView:button-selected', )
  });
}
