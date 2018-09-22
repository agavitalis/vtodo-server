import Todo from '../models/todo';
import check from './loginController'
//this receives the forms of created todos
exports.create_todo =  (req, res, error)=> {

    //do some validations 
    if(!check.session){
        return res.status(401).send({
            message: 'Please login to continue'
        });

    }


    let new_todo = new Todo({
       
         task_name : req.body.task,
         description : req.body.description,
         owner : req.body.owner,
         status : req.body.status,
         deadline : req.body.deadline,
         grade : req.body.grade,

    })

    new_todo.save( (error)=> {
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
                message: "Todo Created successful",
                user:check.session
            })
        }

    })




}