const User = require('../models/user')

exports.getLogin = (req,res) => {
    res.render('login' , {
        pageTitle : "Login"
    })
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