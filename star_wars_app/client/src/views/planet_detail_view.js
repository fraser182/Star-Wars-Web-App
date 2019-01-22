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

  // BUTTON TO SHOW HIDE INFO BELOW
  const button = document.createElement('button');
  button.setAttribute('type','button');
  button.classList.add('btn', 'btn-dark');
  button.textContent = 'more info...';

  // Adds a "-" between any whitespace so that the .id doesnt have to deal with any whitespace
  const regex = / /g;
  const moreInfoDivId = planet.name.replace(regex, "-");

  button.setAttribute('data-target', `#${moreInfoDivId}`); //
  button.setAttribute('data-toggle', 'collapse');
  planetDiv.appendChild(button);

  const moreInfoDiv = document.createElement('div');
  moreInfoDiv.id = moreInfoDivId // id struggles with whitespace
  moreInfoDiv.classList.add('collapse');

  planetDiv.appendChild(moreInfoDiv);

  const moreInfoList = document.createElement('ul');
  // moreInfoList.classList.add('collapse')
  moreInfoDiv.appendChild(moreInfoList)

  const rotationPeriodItem = document.createElement('li');
  rotationPeriodItem.textContent = `Rotation Period: ${planet.rotation_period} standard hours`;
  moreInfoDiv.appendChild(rotationPeriodItem);

  const orbitalPeriodItem = document.createElement('li');
  orbitalPeriodItem.textContent = `Orbital Period: ${planet.orbital_period} standard days`;
  moreInfoDiv.appendChild(orbitalPeriodItem);

  const diameterItem = document.createElement('li');
  diameterItem.textContent = `Diameter: ${planet.diameter} kms`;
  moreInfoDiv.appendChild(diameterItem);

  const climateItem = document.createElement('li');
  climateItem.textContent = `Climate: ${planet.climate}`;
  moreInfoDiv.appendChild(climateItem);

  const gravityItem = document.createElement('li');
  gravityItem.textContent = `Gravity: ${planet.gravity} G`;
  moreInfoDiv.appendChild(gravityItem);

  const terrainItem = document.createElement('li');
  terrainItem.textContent = `Terrain: ${planet.terrain}`;
  moreInfoDiv.appendChild(terrainItem);

  const surfaceWaterItem = document.createElement('li');
  surfaceWaterItem.textContent = `Surface Water: ${planet.surface_water} %`;
  moreInfoDiv.appendChild(surfaceWaterItem);

  const populationItem = document.createElement('li');
  populationItem.textContent = `Population: ${planet.population}`;
  moreInfoDiv.appendChild(populationItem);

  return planetDiv;
}

module.exports = PlanetDetailView;
