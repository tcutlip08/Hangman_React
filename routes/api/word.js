const router = require("express").Router();
const wordController = require("../../controllers/wordController");

router
  .route("/")
  .get(wordController.findAll)
  .post(wordController.create);

router.route("/random").get(wordController.random);

// router
//   .route("/:id")
//   .get(wordController.findById)
//   .put(wordController.update)
//   .delete(wordController.remove);

module.exports = router;
