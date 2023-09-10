//
const express = require('express')
const app =express();

////app listen
app.listen(8000,() => {
    console.log("My Server started at port No. :8000")
});

////get request
app.get('/',(req,res) =>{
    res.send("Hello coders! We've just set up our own server")
})