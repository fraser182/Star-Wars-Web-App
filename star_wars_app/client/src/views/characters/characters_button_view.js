const PubSub = require('../../helpers/pub_sub.js');

const CharactersButtonView = function(element){
  this.element = element;
};

CharactersButtonView.prototype.bindEvents = function(){
  PubSub.subscribe('Characters:characters-loaded', (evt) => {
    const characters = evt.detail;
    this.element.addEventListener('click', (evt) => {
      PubSub.publish('CharactersButtonView:button-selected', characters);
      // console.log('Character Button Working:', characters);
    });
  });
}

module.exports = CharactersButtonView;
