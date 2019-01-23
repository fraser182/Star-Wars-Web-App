const PubSub = require('../helpers/pub_sub.js');
const CharacterDetailView = require('./character_detail_view.js');
const CharactersButtonView = require('./characters_button_view.js');

const CharactersListView = function(container){
  this.container = container;
};

CharactersListView.prototype.bindEvents = function(){
  PubSub.subscribe('CharactersButtonView:button-selected', (evt) => {
    this.container.innerHTML= '';
    // console.log('Characters List Working:', evt.detail);
    this.render(evt.detail)
  });
}

CharactersListView.prototype.render = function(characters){
  characters.forEach((character) => {
    const characterDetail = new CharacterDetailView();
    const characterDiv = characterDetail.createCharacterDetail(character);
    this.container.appendChild(characterDiv);
  });
}


module.exports = CharactersListView;
