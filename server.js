const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: false
  })); 
app.get('/', (req, res) => res.send('Hello World!'))

app.post('/login',(req,res) => {
    var userName = req.body.userName,
    var password = req.body.password
    res.json(req.body)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))