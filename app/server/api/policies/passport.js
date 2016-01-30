import passport from 'passport';
import {Strategy as LocalStrategy} from 'passport-jwt';

// passport.serializeUser(function(user, done) {
//   done(null, user.id);
// });

// passport.deserializeUser(function(id, done) {
//   User.findOne({id}, function(err, user) {
//     done(err, user);
//   });
// });




function strategy(payload, done){
	console.log(payload);
	User
	.findOne({id: payload.sub})
	.exec((err, user) => {
		if(err) {
			return done(err);
		}
		if(!user) {
			return done(null, false, {
				message: 'no this user'
			});
		}
		if(Encrypt.hash(password) === user.password){
			return done(null, user, {
				message: 'login success'
			});
		}else{
			return done(null, false, {
				message: 'password error'
			})
		}
	})
}
passport.use(new LocalStrategy({
	issuer: 'eyasweb',
	secretOrKey: 'secret',
	audience: 'localhost'
}, strategy));

module.exports = function(req, res, next){
	return next();
}