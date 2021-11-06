const router = require('express').Router();


router.get('/', (req, res) => {
  console.log(req.body);
  res.render('homepage', {
    loggedIn: req.session.loggedIn
  });
});


router.get('/signup', (req, res) => {
  res.render('signup');
})


module.exports = router;