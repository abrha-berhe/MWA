var express= require("express");
var router= express.Router();
var gamesController = require("../controllers/gamesController");
var publisherController = require("../controllers/publisherController");
router.route("/games")
.get(gamesController.getAllGames)
.post(gamesController.addOneGame);

router.route("/games/:gameID")
.get(gamesController.getOneGame)
.put(gamesController.updateOneGame)
.delete(gamesController.deleteOneGame);

router.route("/games/:gameID/publisher")
.get(publisherController.getPublisher)
.post(publisherController.addPublisher)
.put(publisherController.updatePublisher)
.delete(publisherController.deletePublisher);

module.exports = router;
 