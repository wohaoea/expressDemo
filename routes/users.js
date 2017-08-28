var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/helloWorld', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/awesome', function(req, res){
  if(req.session.lastPage) {
    console.log('Last page was: ' + req.session.lastPage + ".");    
  }    
  req.session.lastPage = '/awesome';
  res.send("You're Awesome. And the session expired time is: " + req.session.cookie.maxAge);
});

router.get('/radical', function(req, res){
  if (req.session.lastPage) {
    console.log('Last page was: ' + req.session.lastPage + ".");    
  }
  req.session.lastPage = '/radical';
  res.send('What a radical visit! And the session expired time is: ' + req.session.cookie.maxAge);
});

router.get('/tubular', function(req, res){
  if (req.session.lastPage){
    console.log("Last page was: " + req.session.lastPage + ".");    
  }
  req.session.lastPage = '/tubular';
  res.send('Are you a suffer? And the session expired time is: ' + req.session.cookie.maxAge);
});

module.exports = router;
