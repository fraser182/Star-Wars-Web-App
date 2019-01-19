const PubSub = require('../helpers/pub_sub.js');
const PlanetDetailView = require('./planet_detail_view.js');
const ButtonView = require('./planets_button_view.js');

const PlanetListView = function(container){
  this.container = container;
};

PlanetListView.prototype.bindEvents = function(){
  PubSub.subscribe('ButtonView:button-selected', (evt) => {
    console.log('list working:', evt.detail);
    this.render(evt.detail)
  });
}

// PlanetListView.prototype.render = function(planet){
//   this.container.innerHTML = '';
//
//   const heading = this.createHeading(planet);
//
//   this.container.appendChild(heading);
// };
//
// PlanetListView.prototype.createHeading = function(planet){
//   const heading = document.createElement('h2');
//   heading.textContent = planet;
//   return heading;
// };

module.exports = PlanetListView;
