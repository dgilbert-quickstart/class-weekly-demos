//page8-lib-demo.js

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



