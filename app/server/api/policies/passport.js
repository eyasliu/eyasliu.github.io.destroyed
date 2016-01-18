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

passport.use(new LocalStrategy({},
  function(username, password, done) {
  	User.findOne({username: username}).exec((err, user) => {
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
));


module.exports = function(req, res, next){
	return next();
}