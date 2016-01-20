import passport from 'passport';
import {Strategy as LocalStrategy} from 'passport-local';

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findOne({id}, function(err, user) {
    done(err, user);
  });
});




function strategy(username, password, done){
	User
	.findOne({username: username})
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
	session: false
}, strategy));

module.exports = function(req, res, next){
	return next();
}