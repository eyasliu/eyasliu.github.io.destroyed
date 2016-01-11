/**
 * PostsController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create(req, res) {
    Post.create(req.body).exec((err, created) => {
      res.json(err || crerated);
    })
  },

  list(req, res) {
    Post.find().populate('author').exec((err, posts) => {
      res.json(posts);
    });
  },
  detail(req, res){
    let id = parseInt(req.params.id);
    Post.findOne({id}).exec((err, post) => {
      res.json(err || post);
    });
  },
  update(req, res){
    console.log(req);
    let id = parseInt(req.body.id); 
    Post.update({id}, req.body).exec((err, post) => {
      res.json(post);
    });
  },

  remove(req, res) {
    let id = req.body.id; 
    Post.destroy({id}).exec((err, post) => {
      res.json(post);
    });
  }

};