import passport from 'passport';
import {Strategy as LocalStrategy} from 'passport-local';


function strategy(username, password, done){
  console.log(username, password);
  User
  .findOne({username})
  .exec((err, user) => {
    if(err) {
      return done(err, false, {
        message: 'has an error'
      });
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

passport.use(new LocalStrategy(strategy));

module.exports = function(req,res,next){
  // passport.authenticate('jwt', { session: false}, (err, user, info) => {
  //  if(err){
  //     return res.unauthorized({
  //       message: info.message
  //     });
  //   }
  //   if(!user){
  //     return res.unauthorized({
  //       message: info.message
  //     });
  //   }
  //   req.login(user, err => {
  //     if(err){
  //       return res.unauthorized({
  //         message: err
  //       });
  //     }
  //     return next()
  //   })
  // })(req,res,next)
  next();
}