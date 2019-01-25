const StarshipDetailView = function(){

};

StarshipDetailView.prototype.createStarshipDetail = function(starship){
  const starshipDiv = document.createElement('div');

  starshipDiv.id = 'starship-div'

  const starshipImage = document.createElement('img');
  starshipImage.src =`./images/${starship.name}.jpg`;
  starshipImage.alt = `${starship.name}'s image`;
  starshipImage.id = 'starshipImage';
  starshipDiv.appendChild(starshipImage);

  const header = document.createElement('h1');
  header.textContent = starship.name;

  starshipDiv.appendChild(header);

  // BUTTON TO SHOW HIDE INFO BELOW
  const button = document.createElement('button');
  button.setAttribute('type','button');
  button.classList.add('btn', 'btn-dark');
  button.textContent = 'More Info';

  // Adds a "-" between any whitespace so that the .id doesnt have to deal with any whitespace
  const regex = / /g;
  const moreInfoDivId = starship.name.replace(/ /g, "-");

  button.setAttribute('data-target', `#${moreInfoDivId}`); //
  button.setAttribute('data-toggle', 'collapse');
  starshipDiv.appendChild(button);

  const moreInfoDiv = document.createElement('div');
  moreInfoDiv.id = moreInfoDivId // id struggles with whitespace
  moreInfoDiv.classList.add('collapse', 'more-info');

  starshipDiv.appendChild(moreInfoDiv);

  const moreInfoList = document.createElement('ul');
  // moreInfoList.classList.add('collapse')
  moreInfoDiv.appendChild(moreInfoList)


  const modelItem = document.createElement('li');
  modelItem.textContent = `Model: ${starship.model}`;
  moreInfoList.appendChild(modelItem);

  const starshipClassItem = document.createElement('li');
  starshipClassItem.textContent = `Class: ${starship.starship_class.charAt(0).toUpperCase()}` + `${starship.starship_class.slice(1)}`;
  moreInfoList.appendChild(starshipClassItem);

  const manufacturerItem = document.createElement('li');
  manufacturerItem.textContent = `Manufacturer: ${starship.manufacturer}`;
  moreInfoList.appendChild(manufacturerItem);

  const costInCreditsItem = document.createElement('li');
  costInCreditsItem.textContent = `Cost: ${starship.cost_in_credits} Galactic Credits`;
  moreInfoList.appendChild(costInCreditsItem);

  const lengthItem = document.createElement('li');
  lengthItem.textContent = `Length: ${starship.length} meters`;
  moreInfoList.appendChild(lengthItem);

  const crewItem = document.createElement('li');
  crewItem.textContent = `Cost: ${starship.cost_in_credits} Galactic Credits`;
  moreInfoList.appendChild(crewItem);


  const passengerItem = document.createElement('li');
  passengerItem.textContent = `Max no. of Passengers: ${starship.passengers}`;
  moreInfoList.appendChild(passengerItem);

  const maxAtmosphereingSpeedItem = document.createElement('li');
  maxAtmosphereingSpeedItem.textContent = `Max speed in the atmosphere: ${starship.max_atmosphering_speed}`;
  moreInfoList.appendChild(maxAtmosphereingSpeedItem);

  const hyperdriveRatingItem = document.createElement('li');
  hyperdriveRatingItem.textContent = `Hyperdrive Rating Class: ${starship.hyperdrive_rating}`;
  moreInfoList.appendChild(hyperdriveRatingItem);

  const maxNumMegalightsItem = document.createElement('li');
  maxNumMegalightsItem.textContent = `Max no. of Megalights: ${starship.MGLT} per hour`;
  moreInfoList.appendChild(maxNumMegalightsItem);

  const cargoCapacityItem = document.createElement('li');
  cargoCapacityItem.textContent = `Cargo Capacity: ${starship.cargo_capacity} kgs`;
  moreInfoList.appendChild(cargoCapacityItem);

  const consumablesItem = document.createElement('li');
  consumablesItem.textContent = `Max stockpile duration: ${starship.consumables}`;
  moreInfoList.appendChild(consumablesItem);

  return starshipDiv;
}

module.exports = StarshipDetailView;
