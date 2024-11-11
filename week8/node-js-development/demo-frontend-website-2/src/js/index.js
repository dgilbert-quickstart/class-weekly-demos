//type=module, modern javasctipt es5+, import, export 

//import uuid 

const outputDiv = document.getElementById("output");

document.getElementById("btn-uuid-demo-1").addEventListener("click",(e)=>{

    let msg = "";

    try {
       
        msg = "## btn-uuid-demo-1: "
        outputDiv.innerHTML = msg;

    } catch (error) {

        msg = "## btn-uuid-demo-1::error"
        outputDiv.innerHTML = msg;
        console.log(error)
    }
})