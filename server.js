const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: false
  })); 
app.post('/login',(req,res) => {
    if(req.body.userName == 'admin' && req.body.password == 'admin') {
        res.json("{'status':'success'}");
    } else {
        res.json("{'status':'failure'}");
    }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
