//page4-ds-set.js

const outputDiv = document.getElementById("output");

document.getElementById("btn-set-loop-ex1").addEventListener("click", (event)=>{

    let msg = "";
    
    //- integer array - data in-memory 
    //const items_list_1 = [1,2,3,4,3,5,6,7,5];

    try {
        
        msg =  "# btn-set-loop-ex1"
        outputDiv.innerText = msg
        console.log(msg)

        
        outputDiv.innerHTML = msg;


    } catch (error) {

        msg =  "# btn-set-loop-ex1: error"
        outputDiv.innerText = msg

        console.log(msg)
        console.log(error)
    }
});
