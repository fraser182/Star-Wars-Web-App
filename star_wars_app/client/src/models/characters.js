const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Characters = function(){
  this.characters = [];
};

Characters.prototype.getData = function(){

  const peoplePage1Request= new Request('https://swapi.co/api/people/?page=1').get();
  const peoplePage2Request= new Request('https://swapi.co/api/people/?page=2').get();
  const peoplePage3Request= new Request('https://swapi.co/api/people/?page=3').get();
  const peoplePage4Request= new Request('https://swapi.co/api/people/?page=4').get();
  const peoplePage5Request= new Request('https://swapi.co/api/people/?page=5').get();
  const peoplePage6Request= new Request('https://swapi.co/api/people/?page=6').get();
  const peoplePage7Request= new Request('https://swapi.co/api/people/?page=7').get();
  const peoplePage8Request= new Request('https://swapi.co/api/people/?page=8').get();
  const peoplePage9Request= new Request('https://swapi.co/api/people/?page=9').get();


  allPeopleRequests = Promise.all([peoplePage1Request, peoplePage2Request, peoplePage3Request, peoplePage4Request, peoplePage5Request, peoplePage6Request, peoplePage7Request, peoplePage8Request, peoplePage9Request])

  allPeopleRequests.then (allPeopleResponses => {
    // console.log('resolved', allPeopleRequests);
    return allPeopleResponses
    .flatMap(personResponse => personResponse.results)
  })
  .then(allPeople => {
    this.people = allPeople
    PubSub.publish('Characters:characters-loaded', allPeople);
    console.log('characters data - done');
  }).catch(() => {
    // console.log('error message');
    // PubSub.publish('Data:data-loading-error');
  })
}


module.exports = Characters;
