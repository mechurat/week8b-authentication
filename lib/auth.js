var passport = require('passport');
var LocalStrategy = require('passport-local');
var User = require('../models/user');

module.exports = function (app, options) {
    return {
        // two methods
        init: function () {
            // describe how Passport should store/find user data
            // from the Session cookie
            passport.serializeUser(function (user, done) {
                done(null, user._id);
            });

            passport.deserializeUser(function (id, done) {
                User.findById(id, function (err, user) {
                    if (err || !user) return done(err, null);
                    done(null, user);
                });
            });
            
            // Telling passport to start and add to session
            app.use(passport.initialize());
            // allows for persistent login sessions
            app.use(passport.session());
            
            app.use(function(req, res, next){
                // add user to res.locals
                // passport adds req.user
                // we can use res.locals.user in our views
                res.locals.user = req.user;
                next();
            });
        },

        registerRoutes: function () {
            //display the signup page
            app.get('/signup', function(req, res){
                res.render('signup', {viewName: 'Sign up'})
            });
            //handle the FORM SUBMISSION
            
            //display the login page
        }
    };
};
