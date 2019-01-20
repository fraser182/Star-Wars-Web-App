const PubSub = require('../helpers/pub_sub.js');

const StarshipsButtonView = function(element){
  this.element = element;
};

StarshipsButtonView.prototype.bindEvents = function(){
  PubSub.subscribe('Starships:starships-loaded', (evt) => {
    const starships = evt.detail;
    this.element.addEventListener('click', (evt) => {
      PubSub.publish('StarshipsButtonView:button-selected', starships);
      console.log('Starships Button Working:', starships);
    });
  });
}

module.exports = StarshipsButtonView;
