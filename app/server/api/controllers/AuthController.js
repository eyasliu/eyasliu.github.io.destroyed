/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `AuthController.login()`
   */
  login: function (req, res) {
    // console.log(req.body);
    // User.find({username: req.body.username}).exec((err, user) => {
    //   if(user.length){
    //     res.json({
    //       message: ''
    //     })
    //   }
    // })
    // User.create({
    //   username: 'eyas',
    //   password: 'iuyuesong',
    //   email: 'iuyuesong@163.com',
    //   activity: true,
    //   description:'iiiiifdsfdsfdsfs'
    // }).exec(function(err, val){
    //   console.log('create:',val,err);
    // })

    
    return res.json({
      todo: 'jhahah'
    });
  },


  /**
   * `AuthController.logout()`
   */
  logout: function (req, res) {
    return res.json({
      todo: 'logout() is not implemented yet!'
    });
  },

  /*
   * signin
   */
  signup(req, res){
    const {body} = req;
    if(body.username){
      User.find({username: body.username}).exec((err, users) => {
        if(users.length){
          res.status(400);
          res.json({
            text: '该用户名已存在'
          });
        }else{
          User.create(body).exec((err, user) => {
            if(!err){
              res.json({
                text: '注册成功'
              });
            }else{
              res.status(400);
              res.json({
                text: '注册失败',
                error: err
              })
            }
          })
        }
      })
    }else{
      res.status(400);
      res.json({
        text: '用户名必填'
      });
    }
    // return res.json({
    //   todo: 'waiting implemented'
    // })
  }

};

