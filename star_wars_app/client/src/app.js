// Explore
// Planets
const Planets = require('./models/planets.js');
const PlanetsButtonView = require('./views/planets_button_view.js');
const PlanetsListView = require('./views/planets_list_view.js');

// Characters
const Characters = require('./models/characters.js');
const CharactersButtonView = require('./views/characters_button_view.js');
const CharactersListView = require('./views/characters_list_view.js');

// Films
const Films = require('./models/films.js');
const FilmsButtonView = require('./views/films_button_view.js');
const FilmsListView = require('./views/films_list_view.js');

// Vehicles
const Vehicles = require('./models/vehicles.js');
const VehiclesButtonView = require('./views/vehicles_button_view.js');
const VehiclesListView = require('./views/vehicles_list_view.js');

// Starships
const Starships = require('./models/starships.js');
const StarshipsButtonView = require('./views/starships_button_view.js');
const StarshipsListView = require('./views/starships_list_view.js');

// Quizzes
// General Quiz
const GeneralQuiz = require('./models/general_quiz.js')
const GeneralQuizButtonView = require('./views/general_quiz_button_view.js');
const GeneralQuizListView = require('./views/general_quiz_list_view.js');
const GeneralQuizResultView = require('./views/general_quiz_result_view.js');

// Charts
// Planets charts
const PlanetChartsButtonView = require('./views/planet_charts_button_view.js');
const PlanetChartsListView = require('./views/planets_charts_list_view.js');

// DOM
document.addEventListener('DOMContentLoaded', function(){
  console.log('Javascript Loaded');

  // Container
  const container = document.querySelector('#main-info-container');

  // Explore

  // Planets
  const planetsListview = new PlanetsListView(container);
  planetsListview.bindEvents();

  const planetsButtonElement = document.querySelector('#planets');
  const planetsButtonView = new PlanetsButtonView(planetsButtonElement);
  planetsButtonView.bindEvents();

  const planets = new Planets();
  planets.getData();

  // Characters
  const charactersListView = new CharactersListView(container);
  charactersListView.bindEvents();

  const characterButtonElement = document.querySelector('#characters');
  const charactersButtonView = new CharactersButtonView(characterButtonElement);
  charactersButtonView.bindEvents();

  const characters = new Characters();
  characters.getData();

  // Films
  const filmsListView = new FilmsListView(container);
  filmsListView.bindEvents();

  const filmButtonElement = document.querySelector('#films');
  const filmsButtonView = new FilmsButtonView(filmButtonElement);
  filmsButtonView.bindEvents();

  const films = new Films();
  films.getData();

  // Vehicles
  const vehiclesListView = new VehiclesListView(container);
  vehiclesListView.bindEvents();

  const vehicleButtonElement = document.querySelector('#vehicles');
  const vehiclesButtonView = new VehiclesButtonView(vehicleButtonElement);
  vehiclesButtonView.bindEvents();

  const vehicles = new Vehicles();
  vehicles.getData();

  // Starships
  const starshipsListView = new StarshipsListView(container);
  starshipsListView.bindEvents();

  const starshipButtonElement = document.querySelector('#starships');
  const starshipsButtonView = new StarshipsButtonView(starshipButtonElement);
  starshipsButtonView.bindEvents();

  const starships = new Starships();
  starships.getData();


  // Quizzes

  // General Quiz
  const generalQuizResultView = new GeneralQuizResultView(container);
  generalQuizResultView.bindEvents();

  const generalQuizListView = new GeneralQuizListView(container);
  generalQuizListView.bindEvents();

  const generalQuizButtonElement = document.querySelector('#generalQuiz');
  const generalQuizButtonView = new GeneralQuizButtonView(generalQuizButtonElement);
  generalQuizButtonView.bindEvents();

  const generalQuiz = new GeneralQuiz('http://localhost:3000/api/generalquiz');
  generalQuiz.bindEvents();
  generalQuiz.getData();


  // Planet charts

  const planetChartsListView = new planetChartsListView(container);
  planetChartsListView.bindEvents();

  const planetChartsButtonElement = document.querySelector('#planetsCharts');
  const planetChartsButtonView = new PlanetChartsButtonView(planetChartsButtonElement);
  planetChartsButtonView.bindEvents();


});
