const User = require('../models/user')
const passport = require('passport');

exports.getLogin = (req,res) => {
    res.render('login' , {
        pageTitle : "Login",
        errors : req.flash("error")
    })
}

exports.handleLogin = async (req,res,next) => {
    passport.authenticate('local', {
        failureRedirect: '/user/login',
        failureFlash: true,
    })(req, res, next)
}

exports.rememberMe = (req, res) => {
    if (req.body.remember) {
        req.session.cookie.originalMaxAge = 24 * 60 * 60 * 1000; // 1 day / 24h
    } else {
        req.session.cookie.expire = null;
    }

    res.redirect('/admin/dashboard')
}


exports.getSignUp = (req,res) => {
    res.render('signup' , {
        pageTitle : "Login"
    })
}

exports.handleSignUp = async (req,res) => {
    const errors = [];
    console.log(req.body);

    try {
        await User.userValidation(req.body);
        const { email, username, password } = req.body;

        const userEmail = await User.findOne({ email });
        const userName = await User.findOne({ username });

        if (userEmail || userName) {
            errors.push({ message: 'ایمیل یا نام کاربری شما تکراری تکراری میباشد.' })

            return res.render('signup', {
                req,
                pageTitle: "ثبت نام حساب کاربری",
                path: '/signup',
                errors,
            })
        }


        await User.create({
            email,
            username,
            password
        })

        res.redirect('/user/login');

    } catch (err) {
        console.log(err + '...........');

        err.inner.forEach((e) => {
            errors.push({
                name: e.path,
                message: e.message,
            })
        });
        return res.render('signup', {
            req,
            pageTitle: "ثبت نام حساب کاربری",
            path: '/signup',
            errors,
        })
    }
}