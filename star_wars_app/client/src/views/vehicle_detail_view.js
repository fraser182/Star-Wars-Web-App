const VehicleDetailView = function(){

};

VehicleDetailView.prototype.createVehicleDetail = function(vehicle){
  const vehicleDiv = document.createElement('div');

  const header = document.createElement('h1');
  header.textContent = vehicle.name;

  vehicleDiv.appendChild(header);

  const detailList = document.createElement('ul');

  const modelItem = document.createElement('li');
  modelItem.textContent = `Model: ${vehicle.model}`;
  detailList.appendChild(modelItem);

  const manufacturerItem = document.createElement('li');
  manufacturerItem.textContent = `Manufacturer: ${vehicle.manufacturer}`;
  detailList.appendChild(manufacturerItem);

  const crewItem = document.createElement('li');
  crewItem.textContent = `Crew: ${vehicle.crew}`;
  detailList.appendChild(crewItem);

  vehicleDiv.appendChild(detailList);

  return vehicleDiv;
}

module.exports = VehicleDetailView;