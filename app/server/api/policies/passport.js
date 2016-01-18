import passport from 'passport';
import {Strategy as LocalStrategy} from 'passport-local';

let methods = ['login', 'logIn', 'logout', 'logOut', 'isAuthenticated', 'isUnauthenticated'];

function findByUsername(name, cb){
  User.findOne({username: name})
  .exec((err, user) => {
    console.log(err, user);
    // if(err) return cb(null, null);
    // else return
    return cb(err, user);
  })
}

passport.use(new LocalStrategy({},
  function(username, password, done) {
  	sails.log('============================',username,password);
  	User.findOne({username: username}).exec((err, user) => {
  		console.log(err, user);
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
	// console.log('now will be auth bt passport');
	// passport.initialize()(req, res, function () {
 //    // Use the built-in sessions
 //    passport.session()(req, res, function () {
 //      // Make the user available throughout the frontend
 //      res.locals.user = req.user;
 //      // Make the request's passport methods available for socket
 //      if (req.isSocket) {
 //        for (let i = 0; i < methods.length; i++) {
 //          req[methods[i]] = http.IncomingMessage.prototype[methods[i]].bind(req);
 //        }
 //      }
 //      next();
 //    });
 //  });

  // 
	return next();
}