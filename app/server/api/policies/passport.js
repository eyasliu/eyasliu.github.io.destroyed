import passport from 'passport';
import {Strategy as LocalStrategy} from 'passport-local';
let methods = ['login', 'logIn', 'logout', 'logOut', 'isAuthenticated', 'isUnauthenticated'];

passport.use(new LocalStrategy({},
  function(username, password, done) {
  	sails.log(username,password);
    User.findByUsername({ username: username }, function(err, user) {
    	console.log(user);
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      // if (!user.validPassword(password)) {
      //   return done(null, false, { message: 'Incorrect password.' });
      // }
      return done(null, user);
    });
  }
));


module.exports = function(req, res, next){
	// console.log('now will be auth bt passport');
	passport.initialize()(req, res, function () {
    // Use the built-in sessions
    passport.session()(req, res, function () {
      // Make the user available throughout the frontend
      res.locals.user = req.user;
      // Make the request's passport methods available for socket
      if (req.isSocket) {
        for (let i = 0; i < methods.length; i++) {
          req[methods[i]] = http.IncomingMessage.prototype[methods[i]].bind(req);
        }
      }
      next();
    });
  });
	passport.authenticate('local', (err, user, info)=>{
		// console.log(err, user, info);
		if(err){
			return next(err);
		}
		if(user){
			return next(user);
		}
		return next();
	})(req, res, next);
}