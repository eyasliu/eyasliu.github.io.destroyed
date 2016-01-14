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
    User.create({
      username: 'eyas',
      password: 'iuyuesong',
      email: 'iuyuesong@163.com',
      activity: true,
      description:'iiiiifdsfdsfdsfs'
    }).exec(function(err, val){
      console.log('create:',val,err);
    })

    
    return res.json({
      todo: Encrypt.hash('admin','34')
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
  signin(req, res){
    return res.json({
      todo: 'waiting implemented'
    })
  }

};

