//indice de las routes
var express = require ('express');
var router = express.Router();

var examencontroller = require('../controllers/examen_controller');

router.get('/', function(req,res) 
{	res.render('index', {title: ' Examen '});
});
router.get('/examen/question', examencontroller.question);
router.get('/examen/answer', examencontroller.answer);
router.get('/examen/creditos', examencontroller.creditos);

module.exports = router;


