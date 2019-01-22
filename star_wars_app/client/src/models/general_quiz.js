const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');
const GeneralQuizListView = require('../views/general_quiz_list_view.js');

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
  PubSub.subscribe('AnswerView:answers-submitted', (evt) => {
    const questionAnswers = this.generalQuiz;
    const answers = evt.detail;

    console.log('hahaha', answers.answerA);
    console.log('hahahaha2', questionAnswers[0].correctAnswer);

    counter = 0

    for (answer in answers) {
      if (answers.answerA === questionAnswers[0].correctAnswer){
        counter + 1;
      }
      if (answers.answerB === questionAnswers[1].correctAnswer){
        counter + 1;
      }
      if (answers.answerC === questionAnswers[2].correctAnswer){
        counter + 1;
      }
    };
    console.log('counter', counter);
  });
};

module.exports = GeneralQuiz;
