const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Vehicles = function(){
  this.vehicles = [];
};

Vehicles.prototype.getData = function(){
  const vehiclesPage1Request= new Request('https://swapi.co/api/vehicles/?page=1').get();
  const vehiclesPage2Request= new Request('https://swapi.co/api/vehicles/?page=2').get();
  const vehiclesPage3Request= new Request('https://swapi.co/api/vehicles/?page=3').get();
  const vehiclesPage4Request= new Request('https://swapi.co/api/vehicles/?page=4').get();

  allVehicleRequests = Promise.all([vehiclesPage1Request, vehiclesPage2Request, vehiclesPage3Request, vehiclesPage4Request])

  allVehicleRequests.then (allVehiclesResponses => {
    // console.log('resolved', allStarshipsRequests);
    return allVehiclesResponses
    .flatMap(vehicleResponse => vehicleResponse.results)
  })
  .then(allVehicles => {
    this.vehicles = allVehicles
    PubSub.publish('Vehicles:vehicles-loaded', allVehicles);
    console.log('vehicles data - done');
  }).catch(() => {
    // console.log('error message');
    // PubSub.publish('Data:data-loading-error');
  })
}

module.exports = Vehicles;
