var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET users listing. */
router.get('/create', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/import', function(req, res, next) {
  res.render('import', { title: '小事亭' });
});

router.post('/import', function(req,res,next){
  console.log(req.body);
  models.Item.create({
    item: req.body.item,
    price: req.body.price,
    num: req.body.num,
    importdate: req.body.importdate,
    duedate: req.body.duedate,
    count: req.body.count,
    promoteday: req.body.promoteday
  }).then(function(){
    res.redirect('/storage/store');
  })
})

router.get('/store', function(req, res, next) {
  models.Item.findAll().then(function(items){
    res.render('storage',{
      items: items
    });
  });
});

router.get('/discount', function(req, res, next) {
  models.Item.findAll().then(function(items){
    res.render('discount',{
      items: items
    });
  });
});

router.post('/:item_id/delete',function(req, res, next){
	models.Item.destroy({
		where: {
			id: req.params.item_id
		}
	}).then(function(){
		res.redirect('/storage/store');
	});
});

module.exports = router;
