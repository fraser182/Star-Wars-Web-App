const PubSub = require('../helpers/pub_sub.js');

const PlanetDetailView = function(container){
  this.container = container;
};

PlanetDetailView.prototype.bindEvents = function(){
  PubSub.subscribe('Planets:selected-planets-ready', (evt) => {
    const planetObject = evt.detail.name;
    this.render(planetObject);
  });
}

module.exports = PlanetDetailView;
