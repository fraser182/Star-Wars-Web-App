const Planets = require('./models/planets.js');
const PlanetsButtonView = require('./views/planets_button_view.js');
const PlanetsListView = require('./views/planets_list_view.js');


document.addEventListener('DOMContentLoaded', function(){
  console.log('Javascript Loaded');

  const container = document.querySelector('#main-info-container');
  const planetsListview = new PlanetsListView(container);
  planetsListview.bindEvents();

  const buttonElement = document.querySelector('#planets');
  const planetsButtonView = new PlanetsButtonView(buttonElement);
  planetsButtonView.bindEvents();

  const planets = new Planets();
  planets.getData();
});
