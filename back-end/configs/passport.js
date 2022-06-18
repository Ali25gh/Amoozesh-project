const passport = require('passport');
const {Strategy} = require('passport-local'); 
const bcrypt = require('bcrypt');

const User = require('../models/user');

passport.use(
    new Strategy({usernameField : "username"} , async (username,password,done) => {
        try {
            const user = await User.findOne({username})
            if(!user) {
                return done(null,false , {
                    message: "نام کاربری یا رمز عبور اشتباه است."
                })
            }

            const isMatch = await bcrypt.compare(password,user.password)

            if(isMatch) {
                return done(null,user)
            }else {
                return done(null,false , {
                    message: "نام کاربری یا رمز عبور اشتباه است."
                }) 
            }

        } catch (error) {
            console.log(error)
        }
    })

)

passport.serializeUser((user,done)=> {
    done(null,user)
})

passport.deserializeUser((id,done) => {
    User.findById(id,(err,user) => {
        done(err,user)
    })
})