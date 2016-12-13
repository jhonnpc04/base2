var express = require('express');
var router = express.Router();
var reclamoController= require('../controllers/reclamoController');
var reclamo=require('../controllers/reclamoController');
/*var reclamo = {tiporeclamo:"odeco",
               observacion:"malservicio",
               fechareclamo:"29/11/2016"}*/
//var reclamoController = require('../controllers/reclamoController');
/* GET home page. */
router.get('/',reclamoController.pricipal);
router.get('/registro', reclamoController.registro);
router.post('/guardarReclamo', reclamoController.guardarReclamo);
//router.get('/registroReclamo',{title:"ho"});
module.exports = router;
