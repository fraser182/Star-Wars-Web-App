const PubSub = require('../helpers/pub_sub.js');

const PlanetsButtonView = function(element){
  this.element = element;
};

PlanetsButtonView.prototype.bindEvents = function(){
  PubSub.subscribe('Planets:planets-loaded', (evt) => {
    const planets = evt.detail;
    this.element.addEventListener('click', (evt) => {
      PubSub.publish('PlanetsButtonView:button-selected', planets);
      console.log('Planets Button Working:', planets);
    });
  });
}

module.exports = PlanetsButtonView;
