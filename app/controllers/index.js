module.exports.home = function(usuario, req, res){
	res.render('index');
};

module.exports.sobre = function(usuario, req, res){
	res.render('sobre');
};
