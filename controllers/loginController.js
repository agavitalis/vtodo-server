import User from '../models/user';
//login a new user
exports.login_user =  (req, res, error) =>{

    let email = req.body.email;
    let password = req.body.password;

    User.findOne({
        email: email,
        password: password
    }, (error, user) =>{
        if (error) {
            res.send({
                status: 401,
                success: false,
                message: error
            })
        } else {
            //set session
            req.session.user = user;
            exports.session = req.session.user
            res.send({
                status: 200,
                success: true,
                user_id: user.id,
                user:user,
                message: 'Login successful'
                
            });
        }
    })
}

