//indice de las routes
var express = require ('express');
var router = express.Router();

var quizController = require('../controllers/examen_controller');
/*
 * GET home page.
 */
router.get('/', function(req,res) 
{	res.render('index', {title: ' Examen '});
});
router.get('examen/question', examenController.question);
router.get('examen/answer', examenController.answer);

module.exports = router;


