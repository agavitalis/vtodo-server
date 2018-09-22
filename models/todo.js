//to create a schema, I need to requre mongoose
import mongoose from 'mongoose';
let schema = mongoose.Schema;

let todo_schema = new schema({

    task_name: String,
    description: String,
    owner: String,
    deadline: Date,
    status:Boolean,
    grade: {
        type: Number,
        min: 0,
        max: 10
    }, 
    created_at: {
        type: Date,
        default: Date.now
    }


});

//now we create the model using the above schema
var todos = mongoose.model("todo", todo_schema);
//export the model so that it can be used else where
module.exports = todos;