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

        msg = `${items_list_1.toString()} <p>`

        //items_list_1.some()
        //items_list_1.every() 
        //items_list_1.at() //ie: find
        //items_list_1.sort()

        //-- if item exists or conains in array 
        if (items_list_1.includes(4))
        {
            msg += `## item 4 exist in array `;
        }
        else
        {
            msg += `## item 4 not found in array `;
        }

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



