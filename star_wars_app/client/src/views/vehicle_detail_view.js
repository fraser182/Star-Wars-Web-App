const VehicleDetailView = function(){

};

VehicleDetailView.prototype.createVehicleDetail = function(vehicle){
  const vehicleDiv = document.createElement('div');
  vehicleDiv.id = 'vehicle-div';

  const vehicleImage = document.createElement('img');
  // replace function replaces '/' with a - to manage acccessing the 'TIE/LN starfighter' image
  vehicleImage.src =`./images/${vehicle.name.replace(/\//g, "-")}.jpg`;
  vehicleImage.alt = `${vehicle.name}'s image`;
  vehicleImage.id = 'vehicleImage';
  vehicleDiv.appendChild(vehicleImage);

// name string -- The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder bike".
  const header = document.createElement('h1');
  header.textContent = vehicle.name;

  vehicleDiv.appendChild(header);

  // BUTTON TO SHOW HIDE INFO BELOW
  const button = document.createElement('button');
  button.setAttribute('type','button');
  button.classList.add('btn', 'btn-dark');
  button.textContent = 'More Info';

// REPLACE all spaces with "-" and all  "/" with "-"
  const moreInfoDivId = vehicle.name.replace(/ /g, "-").replace(/\//g, "-");

  button.setAttribute('data-target', `#${moreInfoDivId}`); //
  button.setAttribute('data-toggle', 'collapse');
  vehicleDiv.appendChild(button);

  const moreInfoDiv = document.createElement('div');
  moreInfoDiv.id = moreInfoDivId // id struggles with whitespace
moreInfoDiv.classList.add('collapse', 'more-info');

  vehicleDiv.appendChild(moreInfoDiv);

  const moreInfoList = document.createElement('ul');
  // moreInfoList.classList.add('collapse')
  moreInfoDiv.appendChild(moreInfoList)



  // model string -- The model or official name of this vehicle. Such as "All-Terrain Attack Transport".
  const modelItem = document.createElement('li');
  modelItem.textContent = `Model: ${vehicle.model}`;
  moreInfoList.appendChild(modelItem);

  // vehicle_class string -- The class of this vehicle, such as "Wheeled" or "Repulsorcraft".
  const vehicleClassItem = document.createElement('li');
  vehicleClassItem.textContent = `Class: ${vehicle.vehicle_class.charAt(0).toUpperCase()}`+ `${vehicle.vehicle_class.slice(1)}`;
  moreInfoList.appendChild(vehicleClassItem);

  // manufacturer string -- The manufacturer of this vehicle. Comma separated if more than one.
  const manufacturerItem = document.createElement('li');
  manufacturerItem.textContent = `Manufacturer: ${vehicle.manufacturer}`;
  moreInfoList.appendChild(manufacturerItem);

  // length string -- The length of this vehicle in meters.
  const lengthItem = document.createElement('li');
  lengthItem.textContent = `Length: ${vehicle.length} meters`;
  moreInfoList.appendChild(lengthItem);

  // cost_in_credits string -- The cost of this vehicle new, in Galactic Credits.
  const costInCreditItem = document.createElement('li');
  costInCreditItem.textContent = `Cost: ${vehicle.cost_in_credits} Galactic Credits`;
  moreInfoList.appendChild(costInCreditItem);

  // crew string -- The number of personnel needed to run or pilot this vehicle.
  const crewItem = document.createElement('li');
  crewItem.textContent = `Min no. of personnel: ${vehicle.crew}`;
  moreInfoList.appendChild(crewItem);

  // passengers string -- The number of non-essential people this vehicle can transport.
  const passengersItem = document.createElement('li');
  passengersItem.textContent = `Max no. of non-essential passengers: ${vehicle.passengers}`;
  moreInfoList.appendChild(passengersItem);

  // max_atmosphering_speed string -- The maximum speed of this vehicle in the atmosphere.
  const maxAtmosphereItem = document.createElement('li');
  maxAtmosphereItem.textContent = `Max speed: ${vehicle.max_atmosphering_speed}`;
  moreInfoList.appendChild(maxAtmosphereItem);

  // cargo_capacity string -- The maximum number of kilograms that this vehicle can transport.
  const cargoCapacityItem = document.createElement('li');
  cargoCapacityItem.textContent = `Cargo Capacity: ${vehicle.max_atmosphering_speed} kgs`;
  moreInfoList.appendChild(cargoCapacityItem);


  // consumables *string
  // The maximum length of time that this vehicle can provide consumables for its entire crew without having to resupply.
  const consumablesItem = document.createElement('li');
  consumablesItem.textContent = `Max stockpile duration: ${vehicle.consumables}`;
  moreInfoList.appendChild(consumablesItem)


  return vehicleDiv;
}

module.exports = VehicleDetailView;
