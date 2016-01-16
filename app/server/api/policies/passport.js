module.exports = function(req, res, next){
	console.log(req,res);
	return next();
}