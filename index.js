var app = require('express')();

 var http = require('http').Server(app);

 app.get('/', function(req, res){
   res.send('<h1> welcome to milleBOrnes</h1>');
 });

 http.listen(3000, function(){
   console.log('mille bornes : listening on port 3000');
 });
