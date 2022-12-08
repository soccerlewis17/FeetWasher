const Request = require('../models/request')

module.exports = {
    index,
    new: newRequest,
    create,
    show
}

function show(req, res) {
  console.log(req.user, '<---- req.user');
  console.log(req.session, '<---- req.session');

  Request.findById(req.params.id, function(err, requestDoc){
    console.log(requestDoc, '<--------------- requestDoc for show page');
    // Comment.find({request: requestDoc._id}, function(err, commentDoc) {
    res.render('requests/show', {request: requestDoc});
    // res.render(`requests/${req.params.id}`, {request: requestDoc, comment: commentDoc});
    // })
  });
}

function create(req, res) {
    console.log('==================== REQ BODY BELOW')
    console.log(req.body);
    console.log('==================== REQ BODY ABOVE')
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    
    Request.create(req.body, function(err, requestDoc){
        if (err) {
            console.log("======================err");
            console.log(err);
            console.log("==========================================");
      
            return res.send("err creating check the terminal");
        }
        console.log('********* requestDoc below ************')
        console.log(requestDoc);

        res.redirect('/requests');
    })
}


function newRequest(req, res) {
    res.render('requests/new');
}

function index(req, res) {
    
    
    Request.find({}, function (err, requestDocs) {
    console.log(requestDocs);
  
      // respond to the client inside the callback of the model
    res.render("requests/index", {requests: requestDocs});
    });
  }