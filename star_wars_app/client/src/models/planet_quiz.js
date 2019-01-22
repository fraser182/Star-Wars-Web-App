const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');
const PlanetQuizListView = require('../views/planet_quiz/planets_quiz_list_view.js');

const PlanetQuiz = function(url){
  this.planetQuiz = [];
  this.url = url;
};

PlanetQuiz.prototype.getData = function(){
  const request = new Request(this.url);
  request.get().then((planetQuizData) => {
    this.planetQuiz = planetQuizData;
  })
  .then(() => {
    PubSub.publish('PlanetQuiz:questions-loaded', this.planetQuiz);
    console.log('Planet Quiz Data - Incoming', this.planetQuiz);
  });
}

PlanetQuiz.prototype.bindEvents = function(){
  PubSub.subscribe('AnswerView:answers-submitted', (evt) => {
    const questionAnswers = this.planetQuiz;
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
    PubSub.publish('ResultView:results-submitted', counter);
  });
};

module.exports = PlanetQuiz;
