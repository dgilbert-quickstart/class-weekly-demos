//index.js 

const outputDiv = document.getElementById("output")

document.getElementById("btn-call-api-demo-1").addEventListener("click", (e)=>{

    let _msg = "# btn-call-api-demo-1"

    try {
        
        //console.log(_msg)
        //outputDiv.innerText = _msg;

        const _url = "http://localhost:8080/about";

        fetch(_url)
        .then(res=>res.text())
        .then(data =>  outputDiv.innerText = data)
        .catch(err => {
          _msg = "# fetch api error "  
          outputDiv.innerText = _msg
          console.log(_msg)
          console.log(err)
        });    

        //### localhost web access error ### //
        //### access origin error - same local host access error ### //
        //## node js server 
        //## npm i --save cors
        //const cors = require("cors"); //import cors
        //app.use(cors()) //add cors to node middleware to allow same site or localhost access

        /*
            Access to fetch at 'http://localhost:8080/about' 
            from origin 'http://127.0.0.1:5500' has been blocked by 
            CORS policy: No 'Access-Control-Allow-Origin' 
            header is present on the requested resource. 
            If an opaque response serves your needs, 
            set the request's mode to 'no-cors' to 
            fetch the resource with CORS disabled.
        */

    } catch (error) {
        _msg = "#btn-call-api-demo-1::error"
        
        outputDiv.innerText = _msg;

        console.log(_msg)
        console.log(error)
    }
})
