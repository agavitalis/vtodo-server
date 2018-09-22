var Todo = require('../models/todo');//es5

//view all the todos
exports.view_todos = function (req, res, error) {
    //display all the todo,based on selected restaurant
    var owner = req.params.owner;

    Todo.find({
        owner: owner
    }).then(function (response,error) {
        if (error) {
            res.send({
                status: 401,
                success: false,
                message: error
            })
        }
        else{
            res.send({
                success: true,
                status: 200,
                todo: response

            });

        }
        
    })
}