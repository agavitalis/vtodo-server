//since I have a seperate page for my routes we need express and express Router,hence I will import them
import express from 'express';
import mongoose from 'mongoose';

//then the express router
let router = express.Router();

//lets conneect to our mongodb database
mongodb: //<dbuser>:<dbpassword>@ds111963.mlab.com:11963/todo-pro
//mongoose.connect('mongodb://localhost:27017/todo-pro',{ useNewUrlParser: true });
mongoose.connect('mongodb://vita:Chidiebere94@ds111963.mlab.com:11963/todo-pro', {
    useNewUrlParser: true
});

var database_connection = mongoose.connection;

//lets check if the connection was not successful
database_connection.on('error', console.error.bind(console, 'connection error'))

//if the connection was successful
database_connection.once('open', function () {
    console.log('Database connection was successful')
})


//we import our controllers
import register from '../../controllers/registerController';
import login from '../../controllers/loginController';
import profile from '../../controllers/profileController';
import uprofile from '../../controllers/uprofileController';

//todo controllers
import create from '../../controllers/createController';
import update from '../../controllers/updateController';
import deleten from '../../controllers/deleteController';
import read from '../../controllers/readController';
import readOne from '../../controllers/readOneController';



//return a list of all the end pointse
router.get('/', (req, res, next) => {
    console.log(login.session)
     res.send({
         success: true,
         status: 200,
         response: "Welcome to our todo-pro app, read the documentation to guide you on the end points",
         user: login.session
     });
   
});

//accepts user registration details
router.post('/api/register', register.register_user);

//accepts user login details
router.post('/api/login', login.login_user);

//allow user to view profile
router.get('/api/profile/:id', profile.view_profile);

//allow user to update profile
router.post('/api/update-profile', uprofile.update_profile);

//allow user to create a todo task
router.post('/api/create-todo', create.create_todo);

//allow user to update a todo task
router.post('/api/update-todo', update.update_todo);

//allow user to delete a todo task
router.get('/api/delete-todo/:id', deleten.delete_todo);

//allow user to read all his todo tasks
router.get('/api/view-todos/:owner', read.view_todos);

//allow user to read todo tasks by its Id
router.get('/api/view-todo/:id', readOne   .view_todo);

//then we will now export this routes to the index file
module.exports = router;
