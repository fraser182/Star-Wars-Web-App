const PubSub = require('../helpers/pub_sub.js');
const PlanetQuizDetailView = require('./planet_detail_view.js');
const PlanetsQuizButtonView = require('./planets_button_view.js');

const PlanetsQuizListView = function(container){
  this.container = container;
};

PlanetsQuizListView.prototype.bindEvents = function(){
  PubSub.subscribe('PlanetsQuizButtonView:button-selected', (evt) => {
    this.container.innerHTML= '';
    // console.log('Planets Quiz List Working:', evt.detail);
    this.render(evt.detail)
  });
}

PlanetsQuizListView.prototype.render = function(questions){
  questions.forEach((question) => {
    const planetQuizDetail = new PlanetQuizDetailView();
    const planetDiv = planetDetail.createPlanetDetail(planet);
    this.container.appendChild(planetDiv);
  });
}


module.exports = PlanetsQuizListView;
