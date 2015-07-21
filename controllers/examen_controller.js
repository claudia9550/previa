// get question

exports.question=function(req,res) 
{	 res.render('/examen/question', {Pregunta: ' Capital de Italia :'});
};
// get answer

exports.answer=function(req,res) 
{
 	if(req.query.respuesta == 'Roma')  {
	res.render('examen/answer', {Respuesta: ' Correcto '}); }
	else {
	res.render('examen/answer', {Respuesta: ' Incorrecto '}); }
};

exports.creditos=function(req,res) 
{	 res.render('examen/creditos', {});
};
