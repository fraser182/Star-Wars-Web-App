const PubSub = require('../helpers/pub_sub.js');

const ButtonView = function(element){
  this.element = element;
};

ButtonView.prototype.bindEvents = function(){
  PubSub.subscribe('Planets:planets-loaded', (evt) => {
    const planets = evt.detail;
  });

  this.element.addEventListener('click', (evt) => {
    const clickedButton = evt.target.id;
    PubSub.publish('ButtonView:button-selected', clickedButton);
  });
}

module.exports = ButtonView;
