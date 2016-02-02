import passport from 'passport';
import {Strategy as JwtStrategy} from 'passport-jwt';

// passport.serializeUser(function(user, done) {
//   done(null, user.id);
// });

// passport.deserializeUser(function(id, done) {
//   User.findOne({id}, function(err, user) {
//     done(err, user);
//   });
// });




function strategy(payload, done){
	console.log('payload',payload);
	User
	.findOne({username: payload.username})
	.exec((err, user) => {
		if(err) {
			return done(err, false);
		}
		if(!user) {
			return done(null, false, {
				message: 'no this user'
			});
		}

		return done(null, user, {
			message: 'password error'
		})

	})
}
passport.use(new JwtStrategy({
	secretOrKey: 'secret'
}, strategy));


module.exports = function(req,res,next){
	passport.authenticate('jwt', { session: false}, (err, user, info) => {
		if(err || !user){
	    return res.unauthorized({
	      message: info.toString()
	    });
	  }
	 	return next();
	})(req,res,next)
}