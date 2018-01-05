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

router.get('/discount', function(req, res, next) {
  models.Item.findAll().then(function(items){
    res.render('discount_front',{
      items: items
    });
  });
});

router.post('/main', function(req,res,next){
  console.log(req.body);
  models.Cart.create({
    product: req.body.product,
    price: req.body.price,
    num: req.body.num,
  }).then(function(){
    res.redirect('/cart');
  })
})

router.post('/page2', function(req,res,next){
  console.log(req.body);
  models.Cart.create({
    product: req.body.product,
    price: req.body.price,
    num: req.body.num,
  }).then(function(){
    res.redirect('/cart');
  })
})

router.get('/cart', function(req, res, next) {
  models.Cart.findAll().then(function(products){
    res.render('cart',{
      products: products
    });
  });
});

router.post('/:product_id/delete',function(req, res, next){
	models.Cart.destroy({
		where: {
			id: req.params.product_id
		}
	}).then(function(){
		res.redirect('/cart');
	});
});

module.exports = router;