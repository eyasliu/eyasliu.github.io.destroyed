/**
 * PostsController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create(req, res) {
    console.log(req.body);
    Posts.create(req).exec((err, created) => {
      console.log(created);
    })
    return res.json(req.body)
  },

  list(req, res) {
    Posts.find().populate('author').exec((err, posts) => {
      res.json(posts)
    });
  },

  remove(req, res) {
    let id = req.body.id; 
    Posts.update({title: '标题123'}, {title: '标题123456'}).exec((err, post) => {
      console.log(err);
      res.json(post);
    });
  }

};

