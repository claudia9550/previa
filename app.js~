/**
 * Module dependencies.
 */
// Importa paquetes middleware
var express = require('express');
var path    = require('path');
var favicon = require('serve-favicon');
var logger  = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var partials     = require('express-partials');
var routes  = require('./routes/index');
var app     = express();

//var app = module.exports = express.createServer()

//	vista engine setup - 
// instala generador de vistas ejs
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');

// Favicon - Icono Amigable
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));

// asocia rutas a gestores o enrutadores
app.use('/',routes);
app.use(partials());

//app.configure('development', function(){
//  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
//});

//app.configure('production', function(){
 // app.use(express.errorHandler());
//});

//app.listen(3000, function(){
//  console.log("Express server listening on port %d in %s mode", 
//app.address().port, app.settings.env);
//});

//	resto de rutas: genera error 404 de HTTP
app.use(function(req,res,next)
{	var err = new Error ('Not found');
	error.status = 404;
	next(err);
});

//gestion de errores durante el desarrollo-- imprimire stacktrace
if (app.get('env') == 'development')
{	app.use(function(err,req,res,next)
{	    res.status(err.status || 500);
	    res.render('error', { 
            message: err.message, 
            error:err
        });
    });
}
//gestion errorres de produccion
app.use(function(err,req,res,next)
{	res.status(err.status || 500);
	res.render('error', { 
        message: err.message, 
        error:{}
   });
});

//exportar comando de arranque
module.exports=app;

