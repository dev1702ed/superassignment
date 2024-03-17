const {Router} = require("express");
const router = Router();
const controller = require("../controllers/controller")

router.get('/initiateTransaction',controller.initiateTransaction);

module.exports = router;