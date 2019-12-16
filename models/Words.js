var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var WordsSchema = new Schema({
  word: { type: String, required: true },
  length: { type: Number, required: true },
  spaces: { type: Boolean, required: true },
  // specChar: { type: Boolean, required: true },
  video: { type: String, required: true }
});

// This creates our model from the above schema, using mongoose's model method
const Words = mongoose.model("Words", WordsSchema);

// Export the Article model
module.exports = Words;
