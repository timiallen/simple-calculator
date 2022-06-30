const express = require("express");
const bodyParser= require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({extended:true}));
const port = 3000;
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
    
});
app.post("/", function (req, res) {
    var num1= Number( req.body.num1);
    var num2= Number(req.body.num2);
    var result = num1 + num2;
    res.send("the result is " +
     result);
    
});
app.get("/bmicalculator", function(req, res){
   res.sendFile(__dirname + "/bmicalculator.html");
});
app.post("/bmicalculator", function (req, res) {
    var in1 = Number(req.body.in1);
    var in2 = Number(req.body.in2);
    var TotalCalculation = in1 / Math.pow(in2,2);
    var bmi = Math.floor(TotalCalculation);
    res.send("Your Bmi is " + bmi);
});
// linking css with node.js
app.use(express.static('public'));
app.listen(port, function () {
    console.log("server has started");
    
});