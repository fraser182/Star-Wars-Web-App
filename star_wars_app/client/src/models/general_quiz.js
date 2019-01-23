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

    console.log('answers', answers);
    console.log('hahaha', answers.answerA);
    console.log('hahahaha2', questionAnswers[0].correctAnswer);

    let counter = 0

    for (question of questionAnswers) {
      console.log('question', question);
      console.log('answerA', answers.answerA);
      if (answers.answerA === question.correctAnswer || answers.answerB === question.correctAnswer || answers.answerC === question.correctAnswer){
        counter ++;
      }
    };
    console.log('counter', counter);
    // construct a new request object with a url that refers to the database
    // use the requests post method to persist the score to database
    PubSub.publish('ResultView:results-submitted', counter);
  });
};

module.exports = GeneralQuiz;
