const mongoose = require("mongoose");
const db = require("../models");
const data = require("./video.json");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/hangman");

const wordSeed = data;

db.Word.remove({})
  .then(() => db.Word.collection.insertMany(wordSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
