//page1-ds-col.js

const outputDiv = document.getElementById("output");

document.getElementById("btn-ds-coll-ex1").addEventListener("click", (event)=>{

    let msg = "";
    
    //define/creating array/collection 
    //-1 array, object , mixed/nested -array & object
    //-2 looping throught 
    //-3 filtering, finding 
    //-4 add, update, delete
    //- array index - 0..1, array/collection length

    //- integer array - data in-memory 
    const items_list_1 = [1,2,3,4,5,6];

    try {
        
        msg =  "# btn-ds-coll-ex1"
        outputDiv.innerText = msg
        console.log(msg)

        //- display all array items as string 
        //msg = JSON.stringify(items_list_1);
        msg = items_list_1.toString() + "<p>";

        //-length of array         
        msg += `array length: ${items_list_1.length} <p>`
        
        // access array by index 
        msg += `array index 0: ${items_list_1[0]} <p>`
        
        // access array by index 
        msg += `array index 3: ${items_list_1[3]} <p>`
        
        // access array by index 
        msg += `array index 5: ${items_list_1[5]} <p>`
        
        //error - index 6 = out of bound or out of array length 
        //msg += `array index 5: ${items_list_1[6]} <p>`

        outputDiv.innerHTML = msg;


    } catch (error) {

        msg =  "# btn-ds-coll-ex1: error"
        outputDiv.innerText = msg

        console.log(msg)
        console.log(error)
    }
});


document.getElementById("btn-ds-coll-loop-ex1").addEventListener("click", (event)=>{

    let msg = "";
    
    //define/creating array/collection 
    //-1 array, object , mixed/nested -array & object
    //-2 looping throught 
    //-3 filtering, finding 
    //-4 add, update, delete
    //- array index - 0..1, array/collection length

    //- integer array - data in-memory 
    const items_list_1 = [1,2,3,4,5,6];

    try {
        
        msg =  "# btn-ds-coll-loop-ex1"
        outputDiv.innerText = msg
        console.log(msg)

        msg = `### for loop ##  <p>`

        //msg += `${JSON.stringify(items_list_1)} <p>`
        msg += `${items_list_1.toString()} <p>`

        for(i=0;i<items_list_1.length;i++){
            msg += `index: ${i} - ${items_list_1[i]} <br>`
        }

        outputDiv.innerHTML = msg;

    } catch (error) {

        msg =  "# btn-ds-coll-loop-ex1: error"
        outputDiv.innerText = msg

        console.log(msg)
        console.log(error)
    }
});


document.getElementById("btn-ds-coll-loop-ex2").addEventListener("click", (event)=>{

    let msg = "";
    
    //define/creating array/collection 
    //-1 array, object , mixed/nested -array & object
    //-2 looping throught 
    //-3 filtering, finding 
    //-4 add, update, delete
    //- array index - 0..1, array/collection length

    //- integer array - data in-memory 
    const items_list_1 = [1,2,3,4,5,6];

    try {
        
        msg =  "# btn-ds-coll-loop-ex2"
        outputDiv.innerText = msg
        console.log(msg)

        //msg = `${JSON.stringify(items_list_1)} <p>`
        msg = `### foreach loop ##  <p>`
        msg += `${items_list_1.toString()} <p>`

        items_list_1.forEach((item,index,original_array)=>{
            msg += `index: ${index} - ${item} <br>`        
        })

        outputDiv.innerHTML = msg;

    } catch (error) {

        msg =  "# btn-ds-coll-loop-ex2: error"
        outputDiv.innerText = msg

        console.log(msg)
        console.log(error)
    }
});



document.getElementById("btn-ds-coll-loop-ex3").addEventListener("click", (event)=>{

    let msg = "";
    
    //define/creating array/collection 
    //-1 array, object , mixed/nested -array & object
    //-2 looping throught 
    //-3 filtering, finding 
    //-4 add, update, delete
    //- array index - 0..1, array/collection length

    //- integer array - data in-memory 
    const items_list_1 = [1,2,3,4,5,6];

    try {
        
        msg =  "# btn-ds-coll-loop-ex3"
        outputDiv.innerText = msg
        console.log(msg)

        //msg = `${JSON.stringify(items_list_1)} <p>`
        msg = `### map loop ##  <p>`
        msg += `${items_list_1.toString()} <p>`

        //foreach = loop through al items in the array 
        //map = returns a resulting array of all items in loop 
        // - used often in react and other single page development 

        const _result = items_list_1.map((item,index,original_array)=>{
            msg += `index: ${index} - ${item} <br>`        
        })

        msg += `<p>result: ${_result.toString()} `

        outputDiv.innerHTML = msg;



    } catch (error) {

        msg =  "# btn-ds-coll-loop-ex3: error"
        outputDiv.innerText = msg

        console.log(msg)
        console.log(error)
    }
});



document.getElementById("btn-ds-coll-crud-ex1").addEventListener("click", (event)=>{

    let msg = "";
    
    //define/creating array/collection 
    //-1 array, object , mixed/nested -array & object
    //-2 looping throught 
    //-3 filtering, finding 
    //-4 add, update, delete
    //- array index - 0..1, array/collection length

    //- integer array - data in-memory 
    const items_list_1 = [1,2,3,4,5,6];
    const array_string = items_list_1.toString();

    try {
        
        msg =  "# btn-ds-coll-crud-ex1"
        outputDiv.innerText = msg
        console.log(msg)

        //add 
        items_list_1.push(7)

        //update item 
        items_list_1[2] = items_list_1[2]*2

        //delete from bttom/last of array 
        //items_list_1.pop()

        msg += `## delete index 4 <br>`
        //-or- delete         
        items_list_1.splice(4,1) //index, number of items to remove 

        //
        msg += `## original array: ${array_string} <p>`
        msg += `## ${items_list_1.toString()} <p>`

        items_list_1.map(item=>{
            msg += `${item} <br>`
        })

        //=====================================
        //## nested funtion calls
        //items_list_1.splice(4,1).map(item))
        //=====================================

        outputDiv.innerHTML = msg;


    } catch (error) {

        msg =  "# btn-ds-coll-crud-ex1: error"
        outputDiv.innerText = msg

        console.log(msg)
        console.log(error)
    }
});

