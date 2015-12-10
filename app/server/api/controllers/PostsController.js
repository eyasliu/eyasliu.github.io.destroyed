/**
 * PostsController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res) {
    Posts.create(req).exec(function createCB(err, created){
      console.log(created);
    })
    return res.json(req.body)
  }
};

