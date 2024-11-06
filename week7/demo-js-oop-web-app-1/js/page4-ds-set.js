//page4-ds-set.js

const outputDiv = document.getElementById("output");

document.getElementById("btn-set-loop-ex1").addEventListener("click", (event)=>{

    let msg = "";
    
    //- integer array - data in-memory 
    const items_list_1 = [1,2,3,4,3,5,6,7,5];

    //set - does not allow duplicate items
    //    - integer set items are sorted by default 
    const items_set_1 = new Set(items_list_1);

    try {
        
        msg =  "# btn-set-loop-ex1"
        outputDiv.innerText = msg
        console.log(msg)

        msg = `${items_list_1.toString()} <p>`
        
        for(const item of items_set_1) {
            msg += `${item} <br>`
        }

        outputDiv.innerHTML = msg;


    } catch (error) {

        msg =  "# btn-set-loop-ex1: error"
        outputDiv.innerText = msg

        console.log(msg)
        console.log(error)
    }
});
