const PubSub = require('../helpers/pub_sub.js');
const GeneralQuizDetailView = require('./general_quiz_detail_view.js');
const GeneralQuizButtonView = require('./general_quiz_button_view.js');

const GeneralQuizListView = function(container){
  this.container = container;
};

GeneralQuizListView.prototype.bindEvents = function(){
  PubSub.subscribe('GeneralQuizButtonView:button-selected', (evt) => {
    this.container.innerHTML= '';
    console.log('General Quiz List Working:', evt.detail);
    this.render(evt.detail)
  });
}

GeneralQuizListView.prototype.render = function(generalQuiz){
  generalQuiz.forEach((generalQuiz) => {
    const generalQuizDetail = new GeneralQuizDetailView();
    const generalQuizDiv = generalQuizDetail.createGeneralQuizDetail(generalQuiz);
    this.container.appendChild(generalQuizDiv);
  });
}

module.exports = GeneralQuizListView;
