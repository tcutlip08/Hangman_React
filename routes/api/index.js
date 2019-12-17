const router = require("express").Router();
const word = require("./word");

router.use("/word", word);

module.exports = router;
