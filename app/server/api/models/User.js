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
      type: 'string'
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
  }
};

