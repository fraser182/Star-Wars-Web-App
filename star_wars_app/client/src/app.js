const Planets = require('./models/planets.js');
const ButtonView = require('./views/planets_button_view.js');
const PlanetsInfoView = require('./views/planet_detail_view.js');


document.addEventListener('DOMContentLoaded', function(){
  console.log('Javascript Loaded');

  const buttonElement = document.querySelector('#planets');
  const buttonView = new ButtonView(buttonElement);
  buttonView.bindEvents();

  const container = document.querySelector('#planet');
  const planetInfoView = new PlanetInfoView(container);
  planetInfoView.bindEvents();

  const planets = new Planets();
  planets.bindEvents();
  planets.getData();
})
