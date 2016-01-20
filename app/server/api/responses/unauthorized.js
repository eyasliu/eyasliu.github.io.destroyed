module.exports = function unauthorized(data){
	let {req,res} = this;
	res.status(401);
	return res.jsonx(data);
}