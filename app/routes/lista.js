module.exports = function(usuario){
	usuario.get('/lista', function(req, res){
		usuario.app.controllers.lista.listar(usuario, req, res)
	});

	usuario.post('/lista', function(req, res){
		usuario.app.controllers.lista.listar(usuario, req, res)
	});

	
};