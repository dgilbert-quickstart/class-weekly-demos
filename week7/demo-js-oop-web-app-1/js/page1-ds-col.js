//page1-ds-col.js

const outputDiv = document.getElementById("output");

document.getElementById("btn-ds-coll-ex1").addEventListener("click", (event)=>{

    let msg = "";

    try {
        
        msg =  "# btn-ds-coll-ex1"
        outputDiv.innerText = msg

        console.log(msg)

    } catch (error) {

        msg =  "# btn-ds-coll-ex1: error"
        outputDiv.innerText = msg

        console.log(msg)
        console.log(error)
    }
});

