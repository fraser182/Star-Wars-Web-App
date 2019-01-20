const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Starships = function(){
  this.starships = [];
};

Starships.prototype.getData = function(){
  const request1 = new Request('https://swapi.co/api/starships/');
  request1.get().then((starshipsData1) => {
    this.starships = starshipsData1.results;
    console.log('getStarshipsData1', starshipsData1.results);

    const request2 = new Request('https://swapi.co/api/starships/?page=2');
    request2.get().then((starshipsData2) => {
      this.starships = this.starships.concat(starshipsData2.results);
      console.log('getStarshipsData2', starshipsData2.results);

      const request3 = new Request('https://swapi.co/api/starships/?page=3');
      request3.get().then((starshipsData3) => {
        this.starships = this.starships.concat(starshipsData3.results);
        console.log('getStarshipsData3', starshipsData3.results);

        const request4 = new Request('https://swapi.co/api/starships/?page=4');
        request4.get().then((starshipsData4) => {
          this.starships = this.starships.concat(starshipsData4.results);
          console.log('getStarshipsData4', starshipsData4.results);
        }).then(() => {
          PubSub.publish('Starships:starships-loaded', this.starships);
        });
      });
    });
  });
}

module.exports = Starships;
