const Request = require('../models/request');

module.exports = {
    create,
    delete: deleteComment,
    update
}

function update(req, res) {
    Request.findOne({'comments._id': req.params.id}, function(err, requestDoc) {
        console.log(requestDoc, '=============== requestDoc from update function =========');
      const commentSubdoc = requestDoc.comments.id(req.params.id);
      // Ensure that the comment was created by the logged in user
      if (!commentSubdoc.user.equals(req.user._id)) return res.redirect(`/requests/${requestDoc._id}`);
      // Update the text of the comment
      commentSubdoc.content = req.body.content;
      requestDoc.save(function(err) {
        res.redirect(`/requests/${requestDoc._id}`);
      });
    });
  }


function deleteComment(req, res){
    Request.findOne({'comments._id': req.params.id, 'comments.user': req.user._id}, function (err, requestDoc) {
        if (!requestDoc) return res.redirect('/requests');

        requestDoc.comments.remove(req.params.id);

        requestDoc.save(function(err){
            if(err) return res.send('err, check terminal fix this');
            res.redirect(`/requests/${requestDoc._id}`)
          })
    })
}

function create(req, res){
    Request.findById(req.params.id, function (err, requestDoc) {
        if (err) {
          console.log(err, " <- err from Request.findById callback");
          return res.send("error from create comments, check the terminal");
        }
    
        console.log("========================");
        // found movie from the database that we want to add the review (req.body) to!
        console.log(requestDoc, " <- request from the database!");
        console.log("========================");
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        // 2. add the review to the movieDocuments reviews array
        // req.body (contents of the form), which in this case represents a review!
        requestDoc.comments.push(req.body);
        // since movieDoc is a document and we're mutating it (changing it, adding something to reviews array)
        // we need to tell the database, so to tell database we call `.save() on the movieDoc
        requestDoc.save(function (err) {
          // respond to the clinet
        //   console.log(movieDoc)
          console.log(err, " <_ err from requestDoc.save callback")
          // respond to the client in the callback
          // go back to the show page that the form was submitted from
          // so you can check the movie from the database in the show controller
          res.redirect(`/requests/${req.params.id}`);
        });
      });
}