//page8-lib-demo.js

const outputDiv = document.getElementById("output");

document.getElementById("btn-es4-lib-ex1").addEventListener("click", (event)=>{

    let msg = "";
    
    try {
        
        msg =  "# btn-es4-lib-ex1"
        outputDiv.innerText = msg
        console.log(msg)
        
        msg = lib1_es4_func1();

        outputDiv.innerHTML = msg;

    } catch (error) {

        msg =  "# btn-es4-lib-ex1: error"
        outputDiv.innerText = msg

        console.log(msg)
        console.log(error)
    }

});



