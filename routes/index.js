var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: '小事亭' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: '小事亭' });
});

router.get('/main', function(req, res, next) {
  res.render('main', { title: '小事亭' });
});

router.get('/page2', function(req, res, next) {
  res.render('page2', { title: '小事亭' });
});

router.post('/register',function(req,res,next){
  models.Account.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  }).then(function(){
    res.redirect('/main');
  })
})

router.get('/main', function(req, res, next) {
  models.Account.findOne().then(function(accounts){
    res.render('main',{
      accounts: accounts
    });
  });
});

module.exports = router;
