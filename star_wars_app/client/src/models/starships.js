const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Starships = function(){
  this.starships = [];
};

Starships.prototype.getData = function(){
  const starshipsPage1Request= new Request('https://swapi.co/api/starships/?page=1').get();
  const starshipsPage2Request= new Request('https://swapi.co/api/starships/?page=2').get();
  const starshipsPage3Request= new Request('https://swapi.co/api/starships/?page=3').get();
  const starshipsPage4Request= new Request('https://swapi.co/api/starships/?page=4').get();

  allStarshipRequests = Promise.all([starshipsPage1Request, starshipsPage2Request, starshipsPage3Request, starshipsPage4Request])

  allStarshipRequests.then (allStarshipsResponses => {
    // console.log('resolved', allStarshipsRequests);
    return allStarshipsResponses
    .flatMap(starshipResponse => starshipResponse.results)
  })
  .then(allStarships => {
    this.starships = allStarships
    PubSub.publish('Starships:starships-loaded', allStarships);
    console.log('starships data - done');
  }).catch(() => {
    // console.log('error message');
    // PubSub.publish('Data:data-loading-error');
  })
}

module.exports = Starships;
