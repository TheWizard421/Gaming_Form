const withAuth = (req, res, next) => {
    console.log(req.url);
    if (!req.session.user_id) {
        res.redirect('/login');
    } else {
        next();
    }
};
module.exports = withAuth;