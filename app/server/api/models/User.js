/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  autoCreatedAt: false,
  attributes: {
    username: {
      type: 'string',
      required: true,
      unique: true
    },
    password: {
      type: 'string',
      required: true,
      protected: true,
      // toJSON(){
      //   const obj = this.toObject();
      //   delete obj.password;
      //   return obj;
      // }
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
  },

  findById(id, cb){
    this.findOne(id)
    .exec((err, user) => {
      // if(err) return cb(null, null);
      // else return
      return cb(err, user);
    })
  },

  


};

