//page8-lib-demo.js

//import es5+ modules
//script src="js/page8-lib-demo.js" type="module" 
//- js file can now import any valid es5+ exported code 
//- type=module can use es4 and es5+ code 

//object destructuring - retrieve function name from exported file 
import {lib1_es5_func1} from "./lib1-es5.js"

const outputDiv = document.getElementById("output");

document.getElementById("btn-es4-lib-bundle-ex1").addEventListener("click", (event)=>{

    let msg = "";
    
    try {
        
        msg =  "# btn-es4-lib-bundle-ex1"
        outputDiv.innerText = msg
        console.log(msg)
        
        msg = lib1_es4_func1() + "<p>";
        msg += bundle1_es4_func1() + "<p>";
        msg += bundle1_es4_func2()+ "<p>";

        outputDiv.innerHTML = msg;

    } catch (error) {

        msg =  "# btn-es4-lib-bundle-ex1: error"
        outputDiv.innerText = msg

        console.log(msg)
        console.log(error)
    }

});


document.getElementById("btn-es5-lib-bundle-ex1").addEventListener("click", (event)=>{

    let msg = "";
    
    try {
        
        msg =  "# btn-es5-lib-bundle-ex1"
        outputDiv.innerText = msg
        console.log(msg)
        
        //--- es4 -- include 
        msg = lib1_es4_func1() + "<p>";
        msg += bundle1_es4_func1() + "<p>";
        msg += bundle1_es4_func2()+ "<p>";

        //-- es5 module include 
        msg += lib1_es5_func1() + "<p>";

        outputDiv.innerHTML = msg;

    } catch (error) {

        msg =  "# btn-es4-lib-bundle-ex1: error"
        outputDiv.innerText = msg

        console.log(msg)
        console.log(error)
    }

});



