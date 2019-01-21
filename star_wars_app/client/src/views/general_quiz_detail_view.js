const GeneralQuizDetailView = function(){

}

GeneralQuizDetailView.prototype.createGeneralQuizDetail = function(generalQuiz){
  const generalQuizDiv = document.createElement('div');

  // const form = document.createElement('FORM');
  // form.name = 'generalQuizForm';
  // form.method = 'POST';
  // form.action = 'http://localhost:3000/api/generalquiz';
  //
  // const tb = document.createElement('INPUT');
  // tb.type='TEXT';
  // tb.name='myInput';
  // tb.value='Values of my Input';
  // form.appendChild(tb);
  //
  // document.body.appendChild(form);
  // form.submit();
  //
  // const header = document.createElement('h2');
  // header.textContent = generalQuiz.question;
  //
  // generalQuizDiv.appendChild(header);

  return generalQuizDiv;
}

module.exports = GeneralQuizDetailView;
