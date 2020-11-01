/* importar o módulo do framework express */
const express = require('express');
/* importar o módulo do body-parser */
const bodyParser = require('body-parser');
/* importar o módulo do path */
const path = require('path');
/* importar o módulo do consign */
const consign = require('consign');

/* iniciar o express */
const server = express();

server
	/* 'view engine' e 'views' do express */
	.set('view engine', 'ejs')
	.set('views', './app/views')

	 /* utilizar req do body */
	.use(express.urlencoded({extended: true}))
	.use(bodyParser.json())

	/* configurar o middleware express.static */
	.use(express.static('./app/public'))

/* efetua o autoload das rotas*/
consign()
	.include('app/routes')
	.then('app/models')
	.then('app/controllers')
	.into(server);

module.exports = server;