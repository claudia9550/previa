#!/usr/bin/env node

var debug = require('debug')('Examen');
var app   = require('../app');

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'),function() 
{
debug ('Express Server escuchando puerto' + server.address().port);
});
