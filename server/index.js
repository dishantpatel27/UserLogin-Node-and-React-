const PORT          = 8080;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();

app.get('/',(req,res)=>{
    res.render('index.html');
})
app.listen(PORT,() =>{
    console.log("Listening on port: ",PORT);
});