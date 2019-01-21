const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const GeneralQuizQuestions = function(){
  this.generalQuizQuestions = [];
};

GeneralQuizQuestions.prototype.getData = function(){
  const request = new Request('');
  request.get().then((generalQuizQuestionsData) => {
    this.generalQuizQuestions = generalQuizQuestionsData.results;
  })
  .then(() => {
    PubSub.publish('GeneralQuizQuestions:questions-loaded', this.generalQuizQuestions);
    console.log('General Quiz Questions Data - Incoming');
  });
}

module.exports = GeneralQuizQuestions;
