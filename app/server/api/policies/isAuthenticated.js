module.exports = function(req, res, next) {
	if(req.isAuthenticated()){
		return next();
	}else{
		res.status(401);
		return res.json({
			message: '未登录'
		})
	}
}