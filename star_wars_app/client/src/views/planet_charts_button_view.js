const PubSub = require("../helpers/pub_sub.js");

const PlanetChartsButtonView = function(element){
  this.element = element;
};

PlanetChartsButtonView.prototype.bindEvents = function(){
  // PubSub.subscribe('GeneralQuiz:questions-loaded', (evt) => {
  //   const generalQuiz = evt.detail;
  const go = 'go';
    this.element.addEventListener('click', (evt) => {
      PubSub.publish('PlanetChartsButtonView:button-selected', go);
      // console.log('General Quiz Button Working:', generalQuiz);
    });
  });
}

module.exports = PlanetChartsButtonView;
