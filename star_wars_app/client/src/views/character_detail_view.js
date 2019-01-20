const CharacterDetailView = function(){

};

CharacterDetailView.prototype.createCharacterDetail = function(character){
  const characterDiv = document.createElement('div');

  const header = document.createElement('h1');
  header.textContent = character.name;

  characterDiv.appendChild(header);

  const detailList = document.createElement('ul');

  const heightItem = document.createElement('li');
  heightItem.textContent = `Height: ${character.height}`;
  detailList.appendChild(heightItem);

  const massItem = document.createElement('li');
  massItem.textContent = `Mass: ${character.mass}`;
  detailList.appendChild(massItem);

  const hairItem = document.createElement('li');
  hairItem.textContent = `Hair Colour: ${character.hair_color}`;
  detailList.appendChild(hairItem);

  characterDiv.appendChild(detailList);

  return characterDiv;
}

module.exports = CharacterDetailView;
