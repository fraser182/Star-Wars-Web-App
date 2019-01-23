const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');
const CharacterQuizListView = require('../views/character_quiz_list_view.js');

const CharacterQuiz = function(url){
  this.characterQuiz = [];
  this.url = url;
};

CharacterQuiz.prototype.getData = function(){
  const request = new Request(this.url);
  request.get().then((characterQuizData) => {
    this.characterQuiz = characterQuizData;
  })
  .then(() => {
    PubSub.publish('CharacterQuiz:questions-loaded', this.characterQuiz);
    console.log('Character Quiz Data - Incoming', this.characterQuiz);
  });
}

CharacterQuiz.prototype.bindEvents = function(){
  PubSub.subscribe('AnswerView:answers-submitted', (evt) => {
    const questionAnswers = this.characterQuiz;
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

module.exports = CharacterQuiz;
