const StarshipDetailView = function(){

};

StarshipDetailView.prototype.createStarshipDetail = function(starship){
  const starshipDiv = document.createElement('div');

  const header = document.createElement('h1');
  header.textContent = starship.name;

  starshipDiv.appendChild(header);

  const detailList = document.createElement('ul');

  const modelItem = document.createElement('li');
  modelItem.textContent = `Model: ${starship.model}`;
  detailList.appendChild(modelItem);

  const manufacturerItem = document.createElement('li');
  manufacturerItem.textContent = `Manufacturer: ${starship.manufacturer}`;
  detailList.appendChild(manufacturerItem);

  const crewItem = document.createElement('li');
  crewItem.textContent = `Crew: ${starship.crew}`;
  detailList.appendChild(crewItem);

  starshipDiv.appendChild(detailList);

  return starshipDiv;
}

module.exports = StarshipDetailView;
