const CharacterDetailView = function(){

};

CharacterDetailView.prototype.createCharacterDetail = function(character){
  const characterDiv = document.createElement('div');
  characterDiv.id = 'character-div'

  const characterImage = document.createElement('img');
  characterImage.src =`./images/${character.name}.jpg`;
  characterImage.alt = `${character.name}'s image`;
  characterImage.id = 'characterImage';
  characterDiv.appendChild(characterImage);

  const header = document.createElement('h1');
  header.textContent = character.name;

  characterDiv.appendChild(header);

  // BUTTON TO SHOW HIDE INFO BELOW
  const button = document.createElement('button');
  button.setAttribute('type','button');
  button.classList.add('btn', 'btn-info');
  button.textContent = 'More Info';

  // Adds a "-" between any whitespace so that the .id doesnt have to deal with any whitespace
  const regex = / /g;
  const moreInfoDivId = character.name.replace(regex, "-");

  button.setAttribute('data-target', `#${moreInfoDivId}`); //
  button.setAttribute('data-toggle', 'collapse');
  characterDiv.appendChild(button);

  const moreInfoDiv = document.createElement('div');
  moreInfoDiv.id = moreInfoDivId // id struggles with whitespace
  moreInfoDiv.classList.add('collapse');

  characterDiv.appendChild(moreInfoDiv);

  const moreInfoList = document.createElement('ul');
  // moreInfoList.classList.add('collapse')
  moreInfoDiv.appendChild(moreInfoList)


  const birthYearItem = document.createElement('li');
  birthYearItem.textContent = `Birth Year: ${character.birth_year}`;
  moreInfoDiv.appendChild(birthYearItem);

  const eyeColorItem = document.createElement('li');
  eyeColorItem.textContent = `Eye Colour: ${character.eye_color}`;
  moreInfoDiv.appendChild(eyeColorItem);

  const genderItem = document.createElement('li');
  genderItem.textContent = `Gender: ${character.gender}`;
  moreInfoDiv.appendChild(genderItem);

  const hairColourItem = document.createElement('li');
  hairColourItem.textContent = `Hair Colour: ${character.hair_color}`;
  moreInfoDiv.appendChild(hairColourItem);

  const heightItem = document.createElement('li');
  heightItem.textContent = `Height: ${character.height} cms`;
  moreInfoDiv.appendChild(heightItem);

  const massItem = document.createElement('li');
  massItem.textContent = `Mass: ${character.mass} kgs`;
  moreInfoDiv.appendChild(massItem);

  const skinColourItem = document.createElement('li');
  skinColourItem.textContent = `Skin Colour: ${character.skin_color}`;
  moreInfoDiv.appendChild(skinColourItem);

  return characterDiv;
}

module.exports = CharacterDetailView;
