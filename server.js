//
const express = require('express')
const app =express();

////app listen
app.listen(8000,() => {
    console.log("My Server started at port No. :8000")
});

////  //////////////// get request /////////////////////
app.get('/',(req,res) =>{
    res.send("Hello coders! We've just set up our own server")
})


///////////////////// Post Request ////////////////
//Used tom parse request body in express
const bodyParser =require('body-parser');

//specially Parse JSON data & add it to the request object
app.use(bodyParser.json());


//// For submit data post request 
app.post('/api/cars',(req ,res) =>{
    const{name,brand} =req.body;
    console.log(name);
    console.log(brand);
    res.send("Car Submitted Successfully")
});