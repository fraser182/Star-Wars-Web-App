const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const GeneralQuizQuestions = function(){
  this.generalQuizQuestions = [];
};

GeneralQuiz.prototype.getData = function(){
  const request = new Request(this.url);
  request.get().then((generalQuizData) => {
    this.generalQuiz = generalQuizData.results;
  })
  .then(() => {
    PubSub.publish('GeneralQuizQuestions:questions-loaded', this.generalQuiz);
    console.log('General Quiz Questions Data - Incoming');
  });
}

module.exports = GeneralQuiz;
