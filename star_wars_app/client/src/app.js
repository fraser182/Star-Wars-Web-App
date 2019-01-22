// Explore
  // Planets
  const Planets = require('./models/planets.js');
  const PlanetsButtonView = require('./views/planets/planets_button_view.js');
  const PlanetsListView = require('./views/planets/planets_list_view.js');

  // Characters
  const Characters = require('./models/characters.js');
  const CharactersButtonView = require('./views/characters/characters_button_view.js');
  const CharactersListView = require('./views/characters/characters_list_view.js');

  // Films
  const Films = require('./models/films.js');
  const FilmsButtonView = require('./views/films/films_button_view.js');
  const FilmsListView = require('./views/films/films_list_view.js');

  // Vehicles
  const Vehicles = require('./models/vehicles.js');
  const VehiclesButtonView = require('./views/vehicles/vehicles_button_view.js');
  const VehiclesListView = require('./views/vehicles/vehicles_list_view.js');

  // Starships
  const Starships = require('./models/starships.js');
  const StarshipsButtonView = require('./views/starships/starships_button_view.js');
  const StarshipsListView = require('./views/starships/starships_list_view.js');

// Quizzes
  // Planet Quiz
  const PlanetQuiz = require('./models/planet_quiz.js')
  const PlanetQuizButtonView = require('./views/planet_quiz/planets_quiz_button_view.js');
  const PlanetQuizListView = require('./views/planet_quiz/planets_quiz_list_view.js');
  const PlanetQuizResultView = require('./views/planet_quiz/planet_quiz_result_view.js');

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

  // Planet Quiz
  const planetQuizResultView = new PlanetQuizResultView(container);
  planetQuizResultView.bindEvents();

  const planetQuizListView = new PlanetQuizListView(container);
  planetQuizListView.bindEvents();

  const planetQuizButtonElement = document.querySelector('#planetQuiz');
  const planetQuizButtonView = new PlanetQuizButtonView(planetQuizButtonElement);
  planetQuizButtonView.bindEvents();

  const planetQuiz = new PlanetQuiz('http://localhost:3000/api/planetquiz');
  planetQuiz.bindEvents();
  planetQuiz.getData();

});
