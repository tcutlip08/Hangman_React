const express = require("express");
const router = express.Router();
const db = require("../models");

router.post("/", function(req, res) {
  const word = new db.Words({});
  word.save((err, newWord) => {
    if (err) {
      return res.status(500).json({
        message: "Error creating new word.",
        error: true,
        data: err
      });
    } else {
      return res.json({
        message: "Successfully created new user.",
        error: false,
        data: newWord
      });
    }
  });
});

module.exports = router;
