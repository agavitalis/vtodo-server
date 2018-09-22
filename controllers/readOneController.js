import Todo from '../models/todo';

//view a todo with its ID
exports.view_todo = (req, res, error) => {
    let id = req.params.id;


    Todo.findById(id, (error, todo) => {
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
                todo: todo
            })
        }

    })
}