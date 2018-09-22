import Todo from '../models/todo';
//delete todo
exports.delete_todo = function (req, res, error) {

    Todo.deleteOne({
        _id: req.params.id
    }, function (error, todo) {

        if (error) {
            res.send({
                success: false,
                status: 401,
                message: error,
            })
        } else {
            res.send({
                success: true,
                status: 200,
                message: 'Todo Successfully Deleted',
            })
        }


    })
}