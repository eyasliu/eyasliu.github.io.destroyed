/**
* Posts.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    title: {
        type: 'string',
        defaultsTo: '[无标题]'
    },
    author: {
        model: 'users',
        defaultsTo: 1
    },
    content: 'text',
    excerpt: 'text',
    status: {
        type: 'string',
        defaultsTo: 'active'
    },
    slug: 'string',
    term: {
        type: 'array',
        defaultsTo: []
    },
    tags: {
        type: 'array',
        defaultsTo: []
    }
  }
};

