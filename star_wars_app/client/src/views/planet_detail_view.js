const PubSub = require('../helpers/pub_sub.js');

const PlanetInfoView = function(container){
  this.container = container;
};

PlanetInfoView.prototype.bindEvents = function(){
  PubSub.subscribe('Planets:selected-planets-ready', (evt) => {
    const planetObject = evt.detail.name;
    this.render(planetObject);
  });
}

PlanetInfoView.prototype.render = function(planet){
  this.container.innerHTML = '';

  const heading = this.createHeading(planet);

  this.container.appendChild(heading);
};

PlanetInfoView.prototype.createHeading = function(planet){
  const heading = document.createElement('h2');
  heading.textContent = planet;
  return heading;
};

module.exports = PlanetInfoView;
