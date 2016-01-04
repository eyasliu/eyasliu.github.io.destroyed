/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create(req, res) {
    User.create(req.body).exec((err, user) => {
      res.json(user);
    })
  },
  list(req, res) {
    User.find().exec((err, users) => {
      res.json(users);
    })
  },
  remove(req, res){
    User.destroy({email: null}).exec((err, users) => {
      res.json(users);
    })
  },
  update(req, res) {
    const id = req.body.id;
    if(id) {
      User.update({id},req.body).exec((err, user) => {
        if(err) {
          res.json(err);
          return;
        }
        if(user.length){
          res.json(user);
        }else{
          res.json({
            state: 'can not find user'
          })
        }
        
      })
    }else {
      res.json({
        state: 'error, no id!'
      })
    }
  }
};

