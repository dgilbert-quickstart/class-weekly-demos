//page2-ds-col-filter.js

const outputDiv = document.getElementById("output");


document.getElementById("btn-ds-coll-filter-ex1").addEventListener("click", (event)=>{

    let msg = "";
    
    //define/creating array/collection 
    //-3 filtering, finding 

    //- integer array - data in-memory 
    const items_list_1 = [1,2,3,4,5,6];

    try {
        
        msg =  "# btn-ds-coll-filter-ex1"
        outputDiv.innerText = msg
        console.log(msg)

        
        outputDiv.innerHTML = msg;


    } catch (error) {

        msg =  "# btn-ds-coll-filter-ex1: error"
        outputDiv.innerText = msg

        console.log(msg)
        console.log(error)
    }
});
