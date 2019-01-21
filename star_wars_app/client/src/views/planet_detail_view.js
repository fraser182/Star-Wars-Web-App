const PlanetDetailView = function(){

};

PlanetDetailView.prototype.createPlanetDetail = function(planet){
  const planetDiv = document.createElement('div');
  planetDiv.id = 'planet-div';

  const planetImage = document.createElement('img');
  planetImage.src =`./images/${planet.name}.jpg`;
  planetImage.alt = `${planet.name}'s image`;
  planetImage.id = 'planetImage';
  planetDiv.appendChild(planetImage);

  const header = document.createElement('h1');
  header.textContent = planet.name;

  planetDiv.appendChild(header);

  const detailList = document.createElement('ul');

  const populationItem = document.createElement('li');
  populationItem.textContent = `Population: ${planet.population}`;
  detailList.appendChild(populationItem);

  const terrainItem = document.createElement('li');
  terrainItem.textContent = `Terrain: ${planet.terrain}`;
  detailList.appendChild(terrainItem);

  const climateItem = document.createElement('li');
  climateItem.textContent = `Climate: ${planet.climate}`;
  detailList.appendChild(climateItem);

  planetDiv.appendChild(detailList);

  return planetDiv;
}

module.exports = PlanetDetailView;
