const express = require("express"); //import express library 
const app = express(); //create a new express instance in memory 

//### localhost web access error ### //
//### access origin error - same local host access error ### //

/*
Access to fetch at 'http://localhost:8080/about' 
from origin 'http://127.0.0.1:5500' has been blocked by 
CORS policy: No 'Access-Control-Allow-Origin' 
header is present on the requested resource. 
If an opaque response serves your needs, 
set the request's mode to 'no-cors' to 
fetch the resource with CORS disabled.
*/

//- node middleware 

const SERVER_PORT = 8080; //localhost range - 3000 - 9999

//- GET endpoint - url endpoint or route - ie: json placeholder, githpy api 
app.get("/", (req,res) => {
    const _msg = "# Demo node express api 1.0.0";
    console.log(_msg)
    res.send(_msg)
});

app.get("/about", (req,res) => {
    const _msg = "# Demo node express api 1.0.0 - about route";
    console.log(_msg)
    res.send(_msg)
});

app.get("/test1", (req,res) => {
    const _msg = "# Demo node express api 1.0.0 - test1 route";
    console.log(_msg)
    res.send(_msg)
});

//-other - POST, DELETE, PUT

//-start node exporess web server - ie: live server
app.listen(SERVER_PORT, ()=>{
    let _msg = "node express websever running at port: " + SERVER_PORT;
    console.log(_msg);
})


//node src/index.js 
