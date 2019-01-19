const PubSub = require('../helpers/pub_sub.js');

const ButtonView = function(element){
  this.element = element;
};

ButtonView.prototype.bindEvents = function(){
  PubSub.subscribe('Planets:planets-loaded', (evt) => {
    const planets = evt.detail;
    this.element.addEventListener('click', (evt) => {
      PubSub.publish('ButtonView:button-selected', planets);
      console.log('button working:', planets);
    });
  });
}

module.exports = ButtonView;
