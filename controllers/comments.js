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
      if (!commentSubdoc.user.equals(req.user._id)) return res.redirect(`/requests/${requestDoc._id}`);
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
          console.log(err);
          return res.send("error from create comments, check the terminal");
        }
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        requestDoc.comments.push(req.body);
        requestDoc.save(function (err) {
          console.log(err, " <_ err from requestDoc.save callback")
          res.redirect(`/requests/${req.params.id}`);
        });
      });
}