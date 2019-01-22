const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function (collection) {

  const router = express.Router();
  // SHOW ALL
  router.get('/', (req, res) => {
    collection.find()
    .toArray()
    .then((docs) => res.json(docs))
  });
  // // SHOW (1)
  // router.get('/:id', (req, res) => {
  //   const id = ObjectID(req.params.id);
  //   collection.findOne({_id: id})
  //   .then((docs) => res.json(docs));
  // });
  //
  // // CREATE
  // router.post('/', (req, res) => {
  //   const newAnswer = req.body;
  //   collection.insertOne(newAnswer)
  //   .then(() => collection.find().toArray())
  //   .then((docs) => res.json(docs));
  // });
  //
  // // DELETE
  // router.delete('/:id', (req, res) => {
  //   const id = ObjectID(req.params.id);
  //   collection.deleteOne({_id: id})
  //   .then(() => collection.find().toArray())
  //   .then((docs) => res.json(docs));
  // });
  //
  // // UPDATE
  // router.put('/:id', (req, res) => {
  //   const id = ObjectID(req.params.id);
  //   const updatedAnswer = req.body;
  //   collection.updateOne(
  //     {_id: id},
  //     {$set: updatedAnswer}
  //   )
  //   .then(() => collection.find().toArray())
  //   .then((docs) => res.json(docs));
  // })

  return router;

};

module.exports = createRouter;
