exports.auth = (req, res, next) => {
    if (req.isAuthenticated() == true) {
        return next();
    }
    req.flash('error', 'شما مجاز به ورود به این صفحه نیستید!')
    res.redirect('/user/login')
}

exports.notAuth = (req, res, next) => {
    if (req.isAuthenticated() != true) {
        return next();
    }
    req.flash('error', 'شما باید از اکانت خود خارج شوید.')
    res.redirect('/dashboard/setting')
}