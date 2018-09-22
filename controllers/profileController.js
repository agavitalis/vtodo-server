import User from '../models/user';

//view user profile
exports.view_profile =  (req, res, error)=> {
    let id = req.params.id;
    

    User.findById(id,  (error, user) =>{
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
                user: user
            })
        }

    })
}