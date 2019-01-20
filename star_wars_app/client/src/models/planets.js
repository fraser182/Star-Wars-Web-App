const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Planets = function(){
  this.planets = [];
};

Planets.prototype.getData = function(){
  const request1 = new Request('https://swapi.co/api/planets/');
  request1.get().then((planetData1) => {
    this.planets = planetData1.results;
    console.log('getPlanetsData1', planetData1.results);

    const request2 = new Request('https://swapi.co/api/planets/?page=2');
    request2.get().then((planetData2) => {
      this.planets = this.planets.concat(planetData2.results);
      console.log('getPlanetsData2', planetData2.results);

      const request3 = new Request('https://swapi.co/api/planets/?page=3');
      request3.get().then((planetData3) => {
        this.planets = this.planets.concat(planetData3.results);
        console.log('getPlanetsData3', planetData3.results);

        const request4 = new Request('https://swapi.co/api/planets/?page=4');
        request4.get().then((planetData4) => {
          this.planets = this.planets.concat(planetData4.results);
          console.log('getPlanetsData4', planetData4.results);

          const request5 = new Request('https://swapi.co/api/planets/?page=5');
          request5.get().then((planetData5) => {
            this.planets = this.planets.concat(planetData5.results);
            console.log('getPlanetsData5', planetData5.results);

            const request6 = new Request('https://swapi.co/api/planets/?page=6');
            request6.get().then((planetData6) => {
              this.planets = this.planets.concat(planetData6.results);
              console.log('getPlanetsData6', planetData6.results);

              const request7 = new Request('https://swapi.co/api/planets/?page=7');
              request7.get().then((planetData7) => {
                this.planets = this.planets.concat(planetData7.results);
                console.log('getPlanetsData7', planetData7.results);
              }).then(() => {
                PubSub.publish('Planets:planets-loaded', this.planets);
              });
            });
          });
        });
      });
    });
  });
}

module.exports = Planets;
