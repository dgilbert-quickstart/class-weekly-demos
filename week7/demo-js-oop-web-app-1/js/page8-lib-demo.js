//page8-lib-demo.js

const outputDiv = document.getElementById("output");

document.getElementById("btn-lib-ex1").addEventListener("click", (event)=>{

    let msg = "";
    
    try {
        
        msg =  "# btn-lib-ex1"
        outputDiv.innerText = msg
        console.log(msg)
        
        outputDiv.innerHTML = msg;

    } catch (error) {

        msg =  "# btn-lib-ex1: error"
        outputDiv.innerText = msg

        console.log(msg)
        console.log(error)
    }

});



