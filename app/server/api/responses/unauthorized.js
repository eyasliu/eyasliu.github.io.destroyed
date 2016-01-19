module.exports = function unauthorized(data){
	const {req,res} = this;
	res.states(401);
	return res.json(data);
}