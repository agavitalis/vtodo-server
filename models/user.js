//to create a schema, I need to requre mongoose
import  mongoose from 'mongoose';
let schema = mongoose.Schema;

let user_schema = new schema({

    email: String,
    first_name: String,
    last_name: String,
    phone: String,
    password: String,
   
    created_at: {
        type: Date,
        default: Date.now
    }


});

//now we create the model using the above schema
var users = mongoose.model("users", user_schema);
//export the model so that it can be used else where
module.exports = users;