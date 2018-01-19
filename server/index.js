const PORT          = 5000;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();
const dataBase      = require('./loginInfo.json');
var jwt             = require('jsonwebtoken');
var morgan          = require('morgan');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
 
// parse application/json
app.use(bodyParser.json());

app.post('/login',(req,res)=>{
    var givenUserName = req.body.username;
    var givenPassword = req.body.password;
    for(var i in dataBase){
      if((dataBase[i].username == givenUserName) && (dataBase[i].password == givenPassword)){
        
        var token = jwt.sign({user: givenUserName,id: dataBase[i].id}, 'secret', {
            expiresIn: 60 * 60 
          });
          res.json({
            success: true,
            message: 'Here is your Token!',
            token: token
          });
        return;
        }else if (dataBase[i].username == givenUserName ){
            res.json({ success: false, message: 'Authentication failed. Wrong password.' });
          return;
        }
    }
    
    res.json({ success: false, message: 'Authentication failed. User not found.' });
    return;
})
app.get('/loginSuccess', (req, res) => {
    res.send({ 'Login': 'Successful' });
  });
  
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
