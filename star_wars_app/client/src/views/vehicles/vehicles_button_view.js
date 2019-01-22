const PubSub = require('../../helpers/pub_sub.js');

const VehiclesButtonView = function(element){
  this.element = element;
};

VehiclesButtonView.prototype.bindEvents = function(){
  PubSub.subscribe('Vehicles:vehicles-loaded', (evt) => {
    const vehicles = evt.detail;
    this.element.addEventListener('click', (evt) => {
      PubSub.publish('VehiclesButtonView:button-selected', vehicles);
      // console.log('Vehicles Button Working:', vehicles);
    });
  });
}

module.exports = VehiclesButtonView;
