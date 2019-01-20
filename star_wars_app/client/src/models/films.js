const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Films = function(){
  this.films = [];
};

Films.prototype.getData = function(){
  const request1 = new Request('https://swapi.co/api/films/');
  request1.get().then((filmsData1) => {
    this.films = filmsData1.results;
  }).then(() => {
    PubSub.publish('Films:films-loaded', this.films);
    console.log('films data - done');
  });
};


module.exports = Films;
