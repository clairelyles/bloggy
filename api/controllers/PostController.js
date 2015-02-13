/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

 // .then(function(comment) {

 //    }).catch(function(err) {

// SAME AS

//.exec(function(err,post) {

module.exports = {

  create: function(req,res){
    var postData = {
      title: req.body.title,
      body: req.body.body,
      owner:req.session.user.id
    };
    Post.create(postData).exec(function(err,post) {
      if (err) res.send(400, err);
      Post.owner = req.session.user
      Post.publishCreate(post); // publishCreate is a sails.socket.emit parameter
      res.send(post);
    })
  },
  addComment: function(req, res) {
    commentData = {
      body: req.body.body,
      post: req.params.postid,
      owner: req.session.user.id
    };
    Comment.create(commentData).then(function(comment) {
      comment.owner = req.session.user;
      res.send(comment);
    }).catch(function(err) {
      res.send(400,err)
    })
  },
  getComments: function(req, res) {
    Comment.find({where:{post:req.params.postid}})
      .populate('owner').then(function(comments) {
        res.send(comments);
      }).catch(function(err) {
        res.send(400,err);
      })
  }

}

