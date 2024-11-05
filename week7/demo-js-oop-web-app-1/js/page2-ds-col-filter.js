//page2-ds-col-filter.js

const outputDiv = document.getElementById("output");


document.getElementById("btn-ds-coll-filter-ex1").addEventListener("click", (event)=>{

    let msg = "";
    
    //define/creating array/collection 
    //-3 filtering, finding 

    //- integer array - data in-memory 
    const items_list_1 = [1,2,3,4,3,5,6,7,5];

    try {
        
        msg =  "# btn-ds-coll-filter-ex1"
        outputDiv.innerText = msg
        console.log(msg)

        //const _index_item_10 = items_list_1.lastIndexOf(3) //last index found 
        
        const _index_item_3 = items_list_1.indexOf(3)
        const _index_item_10 = items_list_1.indexOf(10)

        msg = `${items_list_1.toString()} <p>`
        msg += `## item_3_index: ${_index_item_3}, item_10_index : ${_index_item_10}`

        outputDiv.innerHTML = msg;


    } catch (error) {

        msg =  "# btn-ds-coll-filter-ex1: error"
        outputDiv.innerText = msg

        console.log(msg)
        console.log(error)
    }
});
