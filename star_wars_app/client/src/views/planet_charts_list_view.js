const PubSub = require('../helpers/pub_sub.js');
const PlanetChartsDetailView = require('./planet_charts_detail_view.js');
const PlanetChartsButtonView = require('./planet_charts_button_view.js');

const PlanetChartsListView = function(container){
  this.container = container;
};

PlanetsListView.prototype.bindEvents = function(){
  PubSub.subscribe('PlanetsButtonView:button-selected', (evt) => {
    this.container.innerHTML= '';
    // console.log('Planets List Working:', evt.detail);
    this.render(evt.detail)
  });
}

PlanetsListView.prototype.render = function(planets){
  planets.forEach((planet) => {
    const planetDetail = new PlanetDetailView();
    const planetDiv = planetDetail.createPlanetDetail(planet);
    this.container.appendChild(planetDiv);
  });
}


module.exports = PlanetsListView;
