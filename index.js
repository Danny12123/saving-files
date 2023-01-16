const express = require("express")
const path = require("path")

const bodyParser = require("body-parser");
const server = express();

const loginRequestHandler =(req,res)=> {
    console.log(req.body.password);
    console.log(req.body.email);
    res.send("DONE!!!")
}

//middleware definitions
server.use(express.static(path.join(__dirname,"public")))

server.use(bodyParser.urlencoded({extended: false}))
server.listen(3000,()=> console.log("server is ready"))

server.post('/login',loginRequestHandler)





































