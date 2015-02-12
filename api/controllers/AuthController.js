var bcrypt = require('bcrypt');

module.exports = {
  login: function(req,res) {
    User.findOne({where:{email:req.body.email}})
    .exec(function(err,user){
      if (err) return res.send(err);
      // if a user exists with that email
      if (user) {
        // 3 params: password input, password in db associated with emai, and function()
        bcrypt.compare(req.body.password,user.password,function(err,match) {
          // if both passwords are a match
          if (match) {
            req.session.user = user;
            res.send({result:true,user:user});
          } else {
            res.send({
              result: false,
              error:'Incorrect passowrd.'
            });
          }
        })
      } else {
        res.send({
          result: false,
          error:'User not found. Please sign up.'
        });
      }
    })
  },
  logout: function(req,res) {
    delete req.session.user;
    // respond to request
    res.send({result:true});
  },
  check:  function(req,res) {
    res.send({
      user: (req.session.user || false)
    });
  }
};

