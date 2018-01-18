const PORT          = 5000;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();
const dataBase      = require('./loginInfo.json');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.post('/login',(req,res)=>{
    var givenUserName = req.body.username;
    var givenPassword = req.body.password;
    for(var i in dataBase){
      if((dataBase[i].username == givenUserName) && (dataBase[i].password == givenPassword)){
        console.log("in if redirect");
        //req.session.user_id = users[i].id;
        res.redirect('http://localhost:5000/loginSuccess');
        return;
        }else if (dataBase[i].username == givenUserName ){
          res.status(403).send("Wrong password");
          return;
        }
    }
    console.log("unsuccessful");
    res.status(403).send("Wrong username and password");
    return;
})
app.get('/loginSuccess', (req, res) => {
    res.send({ 'Login': 'Successful' });
  });
  
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
