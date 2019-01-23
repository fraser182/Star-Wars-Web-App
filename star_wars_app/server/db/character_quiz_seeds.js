use star_wars_world;
db.dropDatabase();

db.characterQuiz.insertMany([
  {
    question: "Which character gets killed by Darth Maul in Episode ?",
    answers: {
      a: "Qui-Gon",
      b: "Obi-Wan Kenobi",
      c: "Anakin Skywalker",
      d: "Samuel Jackson"
    },
    correctAnswer: "Qui-Gon"
  },
  {
    question: "What is the name of the highest and wisest member of the Jedi council?",
    answers: {
      a: "King",
      b: "Master of the Order",
      c: "Grand Master",
      d: "High Member"
    },
    correctAnswer: "Grand Master"
  },
  {
    question: "Which is the most famous statement by c-3PO?",
    answers: {
      a: "Oh my god!",
      b: "This is madness!",
      c: "What the bloody hell do you think you are doing?",
      d: "Out of my way, I still have legs you know!"
    },
    correctAnswer: "This is madness!"
  }
]);
