var express = require('express');
var router = express.Router();
const passport = require('passport');

// The root route renders our only view
router.get('/', function(req, res) {
  res.redirect('/requests');
});

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/requests',
    failureRedirect : '/requests'
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout(function(){
    res.redirect('/requests')
  })
})

module.exports = router;
