const PubSub = require('../helpers/pub_sub.js');
const StarshipDetailView = require('./starship_detail_view.js');
const StarshipsButtonView = require('./starships_button_view.js');

const StarshipsListView = function(container){
  this.container = container;
};

StarshipsListView.prototype.bindEvents = function(){
  PubSub.subscribe('StarshipsButtonView:button-selected', (evt) => {
    console.log('Starships List Working:', evt.detail);
    this.render(evt.detail)
  });
}

StarshipsListView.prototype.render = function(starships){
  starships.forEach((starship) => {
    const starshipDetail = new StarshipDetailView();
    const starshipDiv = starshipDetail.createStarshipDetail(starship);
    this.container.appendChild(starshipDiv);
  });
}


module.exports = StarshipsListView;
