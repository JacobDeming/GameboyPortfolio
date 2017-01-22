var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('/profile',function(req,res,next){
  res.render('index');
});

router.get('/projects',function(req,res,next){
  res.render('index');
})

router.get('/blog',function(req,res,next){
  res.render('blogLanding');
})

module.exports = router;