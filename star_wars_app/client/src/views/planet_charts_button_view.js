const PubSub = require("../helpers/pub_sub.js");
const PlanetChartsDetailView = require('./planet_charts_detail_view.js');

const PlanetChartsButtonView = function(element){
  this.element = element;
};

PlanetChartsButtonView.prototype.bindEvents = function(){

  this.element.addEventListener('click', (evt) => {
    const planetsChartDetailView = new PlanetChartsDetailView();
    planetsChartDetailView.createPlanetChartsDetail();

  });
};

module.exports = PlanetChartsButtonView;
