const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Vehicles = function(){
  this.vehicles = [];
};

Vehicles.prototype.getData = function(){
  const request1 = new Request('https://swapi.co/api/vehicles/');
  request1.get().then((vehiclesData1) => {
    this.vehicles = vehiclesData1.results;
    console.log('getVehiclesData1', vehiclesData1.results);

    const request2 = new Request('https://swapi.co/api/vehicles/?page=2');
    request2.get().then((vehiclesData2) => {
      this.vehicles = this.vehicles.concat(vehiclesData2.results);
      console.log('getVehiclesData2', vehiclesData2.results);

      const request3 = new Request('https://swapi.co/api/vehicles/?page=3');
      request3.get().then((vehiclesData3) => {
        this.vehicles = this.vehicles.concat(vehiclesData3.results);
        console.log('getVehiclesData3', vehiclesData3.results);

        const request4 = new Request('https://swapi.co/api/vehicles/?page=4');
        request4.get().then((vehiclesData4) => {
          this.vehicles = this.vehicles.concat(vehiclesData4.results);
          console.log('getVehiclesData4', vehiclesData4.results);
        }).then(() => {
          PubSub.publish('Vehicles:vehicles-loaded', this.vehicles);
        });
      });
    });
  });
}

module.exports = Vehicles;
