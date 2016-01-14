/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
var crypt = require('crypto').createHash('md5');

module.exports = {

  attributes: {
    username: {
      type: 'string',
      required: true,
      unique: true
    },
    password: {
      type: 'string',
      protected: true
    },
    activity: {
      type: 'boolean',
      defaultsTo: true
    },
    email: {
      type: 'email'
    },
    description: 'text',
    post: {
      collection: 'post',
      via: 'author'
    }
  },

  beforeCreate(vals, cb) {
    vals.password = Encrypt.hash(vals.password);
    cb();
  }

};

function hashPasswd(passwd){
  return 
}

