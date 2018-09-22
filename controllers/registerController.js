import User from '../models/user';

//this receives the forms
exports.register_user = (req, res, error)=> {

    let email = req.body.email;
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    let phone = req.body.phone;
    let password = req.body.password;



    let new_user = new User({
        email: email,
        first_name: first_name,
        last_name: last_name,
        phone: phone,
        password: password

    })

    new_user.save((error)=> {
        if (error) {
            res.send({
                status: 401,
                success: false,
                message: error
            })
        } else {
            //set session
            req.session.user = email;

            res.send({
                status: 200,
                success: true,
                message: "Resgitration successful"
            })
        }

    })

}