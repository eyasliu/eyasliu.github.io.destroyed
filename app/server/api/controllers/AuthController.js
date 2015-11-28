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
    Users.create({
      id: 3,
      username: 'liuyuesong',
      password: 'iuyuesong',
      email: 'iuyuesong@163.com',
      activity: true,
      description:'iiiiifdsfdsfdsfs',
      createdAt: (new Date).getTime(),
      updatedAt: (new Date).getTime()
    }).exec(function(err, val){
      console.log('create:',val,err);
    })
    return res.json({
      todo: 'login() is not implemented yet!'
    });
  },


  /**
   * `AuthController.logout()`
   */
  logout: function (req, res) {
    return res.json({
      todo: 'logout() is not implemented yet!'
    });
  }
};

