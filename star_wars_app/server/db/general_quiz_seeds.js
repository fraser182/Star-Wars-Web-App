use star_wars_world;
db.dropDatabase();

db.generalQuiz.insertMany([
  {
    question: "What is the home planet for Princess Leia?",
    answers: {
      a: "Alderaan",
      b: "Tatooine",
      c: "Naboo",
      d: "Yavin"
    },
    correctAnswer: "Alderaan"
  },
  {
    question: "Which is the planet for where Jabba the Hutt lived in his palace?",
    answers: {
      a: "Tatoonie",
      b: "Geonosis",
      c: "Endor",
      d: "Naboo"
    },
    correctAnswer: "Tatoonie"
  },
  {
    question: "Which is the swamp planet where Yoda went into exile after the Great Jedi Purge (Order 66)?",
    answers: {
      a: "Corellia",
      b: "Kashyyyk",
      c: "Hoth",
      d: "Dagobah"
    },
    correctAnswer: "Dagobah"
  }
]);
