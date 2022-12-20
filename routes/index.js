var express = require('express');
var router = express.Router();
const moviesAPICtrl = require("../controllers/api/movies")


/* GET home page. */

router.get('/', moviesAPICtrl.index);

module.exports = router;
