const mongoose = require('mongoose');
const {schema} = require('./secure/userValidation'); 

const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
    email : {
        type: String,
        required : true,
        unique : true,
    },
    username : {
        type : String,
        minlength : 2,
        maxlength : 30,
        trim: true,
        unique: true,
        required:true,
    },
    password :{
        type: String,
        required : true,
        minlength : 4,
    },
    profileImg : {
        type : String,
        default: "profileImg.png",
    },
    createdAt : {
        type : Date,
        default : Date.now()
    }
})

userSchema.statics.userValidation = function (body) {
    return schema.validate(body, { abortEarly: false });
}

userSchema.pre("save", function (next) {
    let user = this;

    if (!user.isModified("password")) return next();

    bcrypt.hash(user.password, 10, (err, hash) => {
        if (err) return next(err);

        user.password = hash;
        next();
    });
});

module.exports = mongoose.model('User',userSchema)