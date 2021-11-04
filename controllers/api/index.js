const router = require('express').Router();
const postRoutes = require('./post-routes.js')


router.use('/posts', postRoutes);


module.exports = router;
