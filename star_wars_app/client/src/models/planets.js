const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Planets = function(){
  this.planets = [];
};

Planets.prototype.getData = function(){
  
  const planetsPage1Request= new Request('https://swapi.co/api/planets/?page=1').get();
  const planetsPage2Request= new Request('https://swapi.co/api/planets/?page=2').get();
  const planetsPage3Request= new Request('https://swapi.co/api/planets/?page=3').get();
  const planetsPage4Request= new Request('https://swapi.co/api/planets/?page=4').get();
  const planetsPage5Request= new Request('https://swapi.co/api/planets/?page=5').get();
  const planetsPage6Request= new Request('https://swapi.co/api/planets/?page=6').get();
  const planetsPage7Request= new Request('https://swapi.co/api/planets/?page=7').get();


  allPlanetRequests = Promise.all([planetsPage1Request, planetsPage2Request, planetsPage3Request, planetsPage4Request, planetsPage5Request, planetsPage6Request, planetsPage7Request]) // an array of the response data - the json object is inside the promise.

  // allPeopleReponses is an array of  the resolved data
  // console.log('allPlanetRequests initially pending, then resolved', allPlanetRequests);
  allPlanetRequests.then (allPlanetResponses => {
    // console.log('allPlanetRequests - promise resolved', allPlanetRequests);
    return allPlanetResponses
    .flatMap(planetResponse => planetResponse.results)
  })
  .then(allPlanets => {
    this.people = allPlanets
    PubSub.publish('Planets:planets-loaded', allPlanets);
    console.log('planets data - done');
  }).catch(() => {
    // console.log('error message');
    // PubSub.publish('Data:data-loading-error');
  })
}


module.exports = Planets;
