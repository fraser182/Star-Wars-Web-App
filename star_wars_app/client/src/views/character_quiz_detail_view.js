const CharacterQuizDetailView = function(){

}

CharacterQuizDetailView.prototype.createQuizQuestion = function(singleQuestion, form){
  const questionDiv = document.createElement('div');
  questionDiv.id = "question-id"

  const header = document.createElement('h3');
  header.textContent = singleQuestion.question;
  console.log('Question Coming Through:', singleQuestion.question);
  console.log('Answer', singleQuestion.answers);
  questionDiv.appendChild(header);


  this.createInput('radio', singleQuestion.answers.a, questionDiv);
  this.createInput('radio', singleQuestion.answers.b, questionDiv);
  this.createInput('radio', singleQuestion.answers.c, questionDiv);
  this.createInput('radio', singleQuestion.answers.d, questionDiv);


  return questionDiv;
}

CharacterQuizDetailView.prototype.createInput = function (type, value, div) {
  const input = document.createElement("input");
  input.setAttribute('type', type);
  input.setAttribute('value', value);
  input.setAttribute('class', 'radio-buttons');
  const label = document.createElement('label');
  label.textContent = value;
  div.appendChild(label);
  div.appendChild(input);
}

module.exports = CharacterQuizDetailView;
