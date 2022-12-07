const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../models/user');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  async function(accessToken, refreshToken, profile, cb) {
		try {
			// first check has this user logged into our app before?
			// search by the googleId property to see if the googleId exists in the database
			// if it does the user has logged in before
			let user = await User.findOne({googleId: profile.id});
			// if user document exists then pass the users information to the next middleware function
			// if the user doens't exist user will be undefined
			// the next place is passport.serializeUser which is located below
			if(user) return cb(null, user);

			user = await User.create({
				name: profile.displayName,
				googleId: profile.id,
				email: profile.emails[0].value,
				avatar: profile.photos[0].value
			})
			return cb(null, user)
    } catch(err){
			return cb(err)
		}
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(userId, function(err, userDoc){
		if(err) return cb(err);
		cb(null, userDoc);
  })
  // Find your User, using your model, and then call done(err, whateverYourUserIsCalled)
  // When you call this done function passport assigns the user document to req.user, which will 
  // be availible in every Single controller function, so you always know the logged in user

});



