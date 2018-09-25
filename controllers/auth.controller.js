var md5 = require('md5');

var db = require('../db');


module.exports.login = function(req, res) {
  res.render('auth/login');
};

module.exports.postLogin = function(req, res) {
  var email = req.body.email;
  var password = req.body.password;

  var user = db.get('users').find({ email: email }).value();

  if (!user) {
    res.render('auth/login', {
      errors: [
        'User does not exist.'
      ],
      values: req.body
    });
    return;
  }

  var hashedPassword = md5(password);

  if (user.password !== hashedPassword) {
    res.render('auth/login', {
      errors: [
        'Wrong password.'
      ],
      values: req.body
    });
    return;
  }

  res.cookie('userId', user.id, {
    signed: true
  });

  res.redirect('/users');
};
