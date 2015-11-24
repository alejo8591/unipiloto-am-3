var express = require('express');

var router = express.Router();

router.get('/', function(req, res){
	res.render('index', {'title' : 'Lab5-8'});
});


router.post('/message', function(req, res){
	var data = {
		name : "Algún Nombre",
		age : "100",
		id : "4848447"
	};

	console.log(req.body);

	res.header('Content-Type', 'text/json').send(data);
});


router.get('/data', function(req, res){

	try{

		//Modulo en Node.js para manipular archivos
		var fs = require('fs');

		var path = require('path');

		fs.readFile(path.join(__dirname, "../models/data.json"), "utf-8", function(err, data){

			var json = JSON.parse(data);

			res.header('Content-Type', 'text/json').send(json);
		});
	} catch(err){
		console.log(err);
	}
});

router.post('/login', function(req, res){

	if(req.body.userid === "alejo8591@gmail.com" && req.body.password === "1234"){

		/*
		* cookie: generado a traves de hash md5
		* cb829c5f0a1439282b18dd1f51eefa89 = unipiloto am-1
		* fuente: http://www.md5hashgenerator.com/index.php
		*/

		var json = {
			"name": "Alejandro Romero",
			"email": "alejo8591@gmail.com",
			"cookie": "cb829c5f0a1439282b18dd1f51eefa89",
			"uid" : "22828282"
		};

		console.log(json);

		res.header('Content-Type', 'text/json').send(json);

	} else {
		var json = {
			"error" : "Usuario no existe"
		};

		console.log(json);

		res.header('Content-Type', 'text/json').send(json);
	}
});


router.post('/register', function(req, res){

		console.log(req.body);
		/*
		 * cookie: generado a traves de hash md5
		 * cb829c5f0a1439282b18dd1f51eefa89 = unipiloto am-1
		 * fuente: http://www.md5hashgenerator.com/index.php
		 */
		var json = {
			"name": req.body.name,
			"email": req.body.email,
			"cookie": "cb829c5f0a1439282b18dd1f51eefa89",
			"password": req.body.password,
			"uid" : req.body.uid
		};

		console.log(json);

		res.header('Content-Type', 'text/json').send(json);
});


module.exports = router;
