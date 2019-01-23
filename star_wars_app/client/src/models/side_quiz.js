const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');
const SideQuizListView = require('../views/side_quiz_list_view.js');

const SideQuiz = function(url){
  this.sideQuiz = [];
  this.url = url;
};

SideQuiz.prototype.getData = function(){
  const request = new Request(this.url);
  request.get().then((sideQuizData) => {
    this.sideQuiz = sideQuizData;
  })
  .then(() => {
    PubSub.publish('SideQuiz:questions-loaded', this.sideQuiz);
    console.log('Side Quiz Data - Incoming', this.sideQuiz);
  });
}

SideQuiz.prototype.bindEvents = function(){
  PubSub.subscribe('AnswerView:answers-submitted', (evt) => {
    const questionAnswers = this.sideQuiz;
    const answers = evt.detail;

    let counter = 0

    for (question of questionAnswers) {
      if (answers.answerA === question.evilAnswer || answers.answerA === question.evilAnswer2 || answers.answerB === question.evilAnswer || answers.answerB === question.evilAnswer2 || answers.answerC === question.evilAnswer || answers.answerC === question.evilAnswer2){
        counter ++;
      }
    };
    console.log('counter', counter);
    PubSub.publish('ResultView:results-submitted', counter);
  });
};

module.exports = SideQuiz;
