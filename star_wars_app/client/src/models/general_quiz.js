const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const GeneralQuiz = function(url){
  this.generalQuiz = [];
  this.url = url;
};

GeneralQuiz.prototype.getData = function(){
  const request = new Request(this.url);
  request.get().then((generalQuizData) => {
    this.generalQuiz = generalQuizData;
  })
  .then(() => {
    PubSub.publish('GeneralQuiz:questions-loaded', this.generalQuiz);
    console.log('General Quiz Data - Incoming', this.generalQuiz);
  });
}

GeneralQuiz.prototype.bindEvents = function(){
  PubSub.subscribe('AnswerView:answers-submitted', () => {
    this.postAnswer(evt.detail);
  });
}

module.exports = GeneralQuiz;
