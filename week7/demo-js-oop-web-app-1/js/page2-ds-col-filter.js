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



document.getElementById("btn-ds-coll-filter-ex2").addEventListener("click", (event)=>{

    let msg = "";
    
    //define/creating array/collection 
    //-3 filtering, finding 

    //- integer array - data in-memory 
    const items_list_1 = [1,2,3,4,3,5,6,7,5];

    try {
        
        msg =  "# btn-ds-coll-filter-ex2"
        outputDiv.innerText = msg
        console.log(msg)

        const _search1 = 5;
        const _search2 = 10;

        let _found_index1 = -1;
        let _found_index2 = -1;

        //items_list_1.findIndex()
        //items_list_1.findLast()
        //items_list_1.findLastIndex()

        //-- finds first item matching the if statement 

        const _found1 = items_list_1.find((item,index)=>{
            _found_index1 = index
            return item == _search1
        });

        const _found2 = items_list_1.find((item,index)=>{
            _found_index2 = index
            return item == _search2
        });

        msg = `${items_list_1.toString()} <p>`
        msg += `search1: ${_search1}, found1: ${_found1}, index: ${_found_index1} 
        | search2: ${_search2}, found2: ${_found2}, index: ${_found_index2}`

        outputDiv.innerHTML = msg;


    } catch (error) {

        msg =  "# btn-ds-coll-filter-ex2: error"
        outputDiv.innerText = msg

        console.log(msg)
        console.log(error)
    }
});


