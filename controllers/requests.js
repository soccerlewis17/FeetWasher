const Request = require('../models/request')

module.exports = {
    index,
    newService,
    newPrayer,
    create,
    show,
    delete: deleteRequest,
}

function deleteRequest(req, res){
    Request.findOne({'request._id': req.params.id, 'request.user': req.user._id}, function (err, requestDoc) {
        if (!requestDoc) return res.redirect('/requests');

        requestDoc.remove(req.params.id);

        requestDoc.save(function(err){
            if(err) return res.send('err, check terminal fix this');
            res.redirect('/requests')
          })
    })
}

function show(req, res) {
  console.log(req.user, '<---- req.user');
  console.log(req.session, '<---- req.session');

  Request.findById(req.params.id, function(err, requestDoc){
    res.render('requests/show', {request: requestDoc});
  });
}

function create(req, res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    
    Request.create(req.body, function(err, requestDoc){
        if (err) {
            console.log(err);
            return res.send("err creating check the terminal");
        }
        res.redirect('/requests');
    })
}

function newPrayer(req, res) {
    res.render('requests/newPrayer');
}

function newService(req, res) {
    res.render('requests/newService');
}

function index(req, res) {
    Request.find({}, function (err, requestDocs) {
    res.render("requests/index", {requests: requestDocs});
    });
  }