import User from '../models/user';

//update a user-profile
exports.update_profile =  (req, res, error)=> {

    User.findById(req.body.id,  (error, user) =>{
        if (error) {

            res.send({
                status: 401,
                success: false,
                message: error
            })

        } else {

            user.email = req.body.email;
            user.first_name = req.body.first_name;
            user.last_name = req.body.last_name;
            user.phone = req.body.phone;
           
            user.save( (error)=> {
                if (error) {
                    res.send({
                        status: 401,
                        success: false,
                        message: error
                    })
                } else {
                    res.send({
                        status: 200,
                        success: true,
                        message: "Profile Update Successful"
                    })

                }

            })


        }


    })

}