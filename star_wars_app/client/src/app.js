const Planets = require('./models/planets.js');
const ButtonView = require('./views/planets_button_view.js');
const PlanetDetailView = require('./views/planet_detail_view.js');
const PlanetListView = require('./views/planet_list_view.js');


document.addEventListener('DOMContentLoaded', function(){
  console.log('Javascript Loaded');

  const container = document.querySelector('#planet');
  const planetListview = new PlanetListView(container);
  planetListview.bindEvents();

  const buttonElement = document.querySelector('#planets');
  const buttonView = new ButtonView(buttonElement);
  buttonView.bindEvents();

  const planets = new Planets();
  planets.getData();
});
