const PubSub = require('../../helpers/pub_sub.js');

const FilmsButtonView = function(element){
  this.element = element;
};

FilmsButtonView.prototype.bindEvents = function(){
  PubSub.subscribe('Films:films-loaded', (evt) => {
    const films = evt.detail;
    this.element.addEventListener('click', (evt) => {
      PubSub.publish('FilmsButtonView:button-selected', films);
      // console.log('Films Button Working:', films);
    });
  });
}

module.exports = FilmsButtonView;
