const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const port = process.env.PORT || 3000

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: false
  })); 

  var URL ='mongodb+srv://admin:admin@being-zero-yduch.mongodb.net/test?retryWrites=true';

mongoose.connect(URL, {useNewUrlParser: true});
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
console.log('connected to mongodb')}
);

var userSchema = new mongoose.Schema( { 
    userName : String,
    password: String
})

var userModel = mongoose.model('user',userSchema)

app.post('/register',(req,res) => {
   var user = new userModel({'userName':req.body.userName,'password':req.body.userName});
   user.save((err,savedUser) => {
       console.log('error ' +err);
    if(err!=null) {
        res.json("{status: 'Failure'}")
    } else {
        res.json("{status: 'Success'}")
    }
   }) 
})

app.get('/users', function(req, resp){
    userModel.find({}, function(arr, users) {
        resp.json(users);
     });
});

app.post('/login', function(req,res){
   if(userModel.findOne(new userModel({'userName':req.body.userName,'password':req.body.userName}))) {
       res.json("{'status':'Valid User'}");
   } else{
       res.json("{'status':'Invalid User' } ");
   }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
