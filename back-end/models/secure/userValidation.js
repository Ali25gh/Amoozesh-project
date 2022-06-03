const Yup = require('yup');

exports.schema = Yup.object().shape({
    email : Yup.string().required(".ایمیل الزامی است").email(".لطفا ایمیل خود را دوباره چک کنید"),
    username : Yup.string().required("نام کاربری الزامی است.").min(2 , "نام کاربری شما خیلی کوتاه میباشد.").max(30 , "نام کاربری شما خیلی طولانی میباشد."),
    password : Yup.string().required("لطفا رمز عبور خود را وارد کنید").min(4,"رمزعبور کوتاه است."),
    confirmPassword : Yup.string().required('لطفا تکرار رمز عبور را وارد کنید.').min(4,'تکرار رمز عبور بسیار کوتاه است').oneOf([Yup.ref('password'),null],"رمز عبور مشابه نیست"),
    profileImg : Yup.object().shape({
        name: Yup.string(),
        size : Yup.number().max(3000000,'باید حجم عکس کمتر از 3 مگابایت باشد'),
        mimeType : Yup.mixed().oneOf(['png','jpeg'],'تنها از دو فرمت png و jpeg پشتیبانی میکنیم') 
    })
})
