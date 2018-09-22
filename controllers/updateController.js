import Todo from '../models/todo';
//update todo detail,receive the form
exports.update_todo = function (req, res, error) {

    Todo.findById(req.body.id, function (error, todo) {
        if (error) {

            res.send({
                status: 401,
                success: false,
                message: error
            })

        } else {

           
            todo.status = true;
            
        
            todo.save( (error)=> {
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
                        message: "Todo Successfully Updated"
                    })

                }

            })
        }

    })

}
