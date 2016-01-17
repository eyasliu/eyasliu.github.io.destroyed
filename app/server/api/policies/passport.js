

module.exports = function(req, res, next){
	console.log('now will be auth bt passport');
	return next();
}