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
    
    //- data in-memory 
    const items1 = "item1,item2,item3,item4"
    const items2 = "item1:1.0,item2:1.3,item3:1.1,item4:1.2"

    try {
        
        msg =  "# btn-nested-array-functions-ex1"
        outputDiv.innerText = msg
        console.log(msg)

        const _list = items1.split(",")

        msg = `${items1} <p>`
        msg += `${_list.toString()} <p>`

        _list.forEach((item,index)=>{
            msg += `${item} <br>`
        })

        outputDiv.innerHTML = msg;


    } catch (error) {

        msg =  "# btn-nested-array-functions-ex1: error"
        outputDiv.innerText = msg

        console.log(msg)
        console.log(error)
    }
});

document.getElementById("btn-nested-array-functions-ex2").addEventListener("click", (event)=>{

    let msg = "";
    
    //- data in-memory 
    const items1 = "item1,item2,item3,item4"
    const items2 = "item1:1.0,item2:1.3,item3:1.1,item4:1.2"

    try {
        
        msg =  "# btn-nested-array-functions-ex2"
        outputDiv.innerText = msg
        console.log(msg)

        msg = `${items1} <p>`

        //ie: funcional programming , nested functions, function chaining
        items1.split(",").forEach((item,index)=>{
            msg += `${item} <br>`
        })//.map().filter(),...etc...

        outputDiv.innerHTML = msg;


    } catch (error) {

        msg =  "# btn-nested-array-functions-ex2: error"
        outputDiv.innerText = msg

        console.log(msg)
        console.log(error)
    }
});


