//page3-ds-col-other.js

const outputDiv = document.getElementById("output");


document.getElementById("btn-array-include-ex1").addEventListener("click", (event)=>{

    let msg = "";
    
    //- integer array - data in-memory 
    const items_list_1 = [1,2,3,4,3,5,6,7,5];

    try {
        
        msg =  "# btn-array-include-ex1"
        outputDiv.innerText = msg
        console.log(msg)

        outputDiv.innerHTML = msg;


    } catch (error) {

        msg =  "# btn-array-include-ex1: error"
        outputDiv.innerText = msg

        console.log(msg)
        console.log(error)
    }
});



document.getElementById("btn-nested-array-functions-ex1").addEventListener("click", (event)=>{

    let msg = "";
    
    //- integer array - data in-memory 
    const items_list_1 = [1,2,3,4,3,5,6,7,5];

    try {
        
        msg =  "# btn-nested-array-functions-ex1"
        outputDiv.innerText = msg
        console.log(msg)

        outputDiv.innerHTML = msg;


    } catch (error) {

        msg =  "# btn-nested-array-functions-ex1: error"
        outputDiv.innerText = msg

        console.log(msg)
        console.log(error)
    }
});



