/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var bcrypt = require('bcrypt');

module.exports = {

  attributes: {
    firstName: {
      type:'string'
    },
    lastName: {
      type:'string'
    },
    email: {
      type:'string',
      required: true,
      unique: true
    },
    password: {
      type: 'string',
      required: true
    },
    comments: {
      collection:'Comment',
      via:'owner'
    },
    posts: {
      collection:'Post',
      via:'owner'
    },

    toJSON: function() {
      var userObj = this.toObject();
      delete userObj.password;
      return userObj;
    }

  },
  //                     ! cb = call back
  beforeCreate:function(values,cb) {
    bcrypt.hash(values.password, 10, function(err,hash) {
      if (err) return cb(err);
      values.password = hash;
      cb();
    })
  }

};

