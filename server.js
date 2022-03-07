const express = require("express");
const bodyparser =require("body-parser");
const app = express();

app.use(bodyparser.urlencoded({extended: true}));
app.get("/", function(request, response)
{   

    response.sendFile(__dirname + "/bmicalc.html");
   
});

app.post("/bmicalc.html", function(req, res)
{
     var ht = Number(req.body.height);
     var wt = Number(req.body.weight);
     var bmi= wt/((ht*ht));
     res.send("BMI is "+ bmi);
});


app.listen(3000 , function()
{
    console.log("server running");
});