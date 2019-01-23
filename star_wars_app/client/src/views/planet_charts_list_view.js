const PubSub = require('../helpers/pub_sub.js');
const PlanetChartsDetailView = require('./planet_charts_detail_view.js');
const PlanetChartsButtonView = require('./planet_charts_button_view.js');

const PlanetChartsListView = function(container){
  this.container = container;
};

PlanetChartsListView.prototype.bindEvents = function(){
  PubSub.subscribe('PlanetChartsButtonView:button-selected', (evt) => {
    this.container.innerHTML= '';
    this.render()
  });
}

PlanetChartsListView.prototype.render = function(){
    // const planetChartsDetail = new PlanetChartsDetailView();
    // const planetChartsDiv = planetChartsDetail.createPlanetChartsDetail();
    this.container.appendChild(planetChartsDiv);
}


module.exports = PlanetChartsListView;
