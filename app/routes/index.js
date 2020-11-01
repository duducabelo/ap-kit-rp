module.exports = function(usuario){
	usuario.get('/', function(req, res){
		usuario.app.controllers.index.home(usuario, req, res)
	});

	usuario.get('/sobre', function(req, res){
		usuario.app.controllers.index.sobre(usuario, req, res)
	});

};