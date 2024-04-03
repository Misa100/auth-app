const passport = require('passport');
const pool = require('../config/db.config');

const User = (req, res) => {
     const {email, password} = req.body.data;
     pool.query("insert into public.user (email,password) values ($1,$2)", [email, password], function(err, result){
          if (err) {
               res.status(400).send(err);
               return;
           }
           res.status(200).send(result.rows);
     })
}

const googleAuth = passport.authenticate('google', { scope: ['profile', 'email'] });

const googleAuthCallback = (req, res, next) => {
  passport.authenticate('google', { failureRedirect: '/login' }, (err, user, info) => {
    if (err) { return next(err); }
    if (!user) { return res.redirect('/login'); }
    // Vous pouvez ici établir une session ou autre selon vos besoins
    res.redirect('/');
  })(req, res, next);
};

module.exports = {User, googleAuth, googleAuthCallback}