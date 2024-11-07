//page7-js-oop-es5.js

const outputDiv = document.getElementById("output");

document.getElementById("btn-es5-oop-ex1").addEventListener("click", (event)=>{

    let msg = "";
    
    try {
        
        msg =  "# btn-es5-oop-ex1"
        outputDiv.innerText = msg
        console.log(msg)
        
        //# define calss/template to be re-used - including methods, variables/properties 
        //- methods and properties can only be use with that class

        //es5 - define class with default data 
        
        //# re-use calss - create a intsance or creat clas wirth data in memory 
        
        outputDiv.innerHTML = msg;


    } catch (error) {

        msg =  "# btn-es5-oop-ex1: error"
        outputDiv.innerText = msg

        console.log(msg)
        console.log(error)
    }
});

