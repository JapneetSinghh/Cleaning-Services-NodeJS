exports.getLogin = (req, res, next) => {
    res.render('auth/login', {
        pageTitle: 'Login | OneStepAwayCleaner',
    })
}
exports.getSignup = (req, res, next) => {
    res.render('auth/signup', {
        pageTitle: 'Signup | OneStepAwayCleaner',
    })
}
exports.postLogin = (req, res, next) => {
    console.log('Login Form Submitted');
    const email = req.body.email;
    const password = req.body.password;
    if (email === 'sheldon@gmail.com' && password === 'dd') {
        console.log('Correct');
        console.log('Vaild Password');
        req.session.isLoggedIn = true;
        req.session.save();
        res.redirect('/dashboard');
    } else {
        console.log('WRONG');
        res.redirect('/login');
    }
}

exports.postLogout=(req,res,next)=>{
    req.session.destroy(err => {
        console.log(err);
        return res.redirect('/');
    })
}