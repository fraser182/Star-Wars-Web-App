const PubSub = require('../helpers/pub_sub.js');
const VehicleDetailView = require('./vehicle_detail_view.js');
const VehiclesButtonView = require('./vehicles_button_view.js');

const VehiclesListView = function(container){
  this.container = container;
};

VehiclesListView.prototype.bindEvents = function(){
  PubSub.subscribe('VehiclesButtonView:button-selected', (evt) => {
    console.log('Vehicles List Working:', evt.detail);
    this.render(evt.detail)
  });
}

VehiclesListView.prototype.render = function(vehicles){
  vehicles.forEach((vehicle) => {
    const vehicleDetail = new VehicleDetailView();
    const vehicleDiv = vehicleDetail.createVehicleDetail(vehicle);
    this.container.appendChild(vehicleDiv);
  });
}


module.exports = VehiclesListView;
