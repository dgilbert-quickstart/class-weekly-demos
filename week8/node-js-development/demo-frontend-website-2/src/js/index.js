//type=module, modern javasctipt es5+, import, export 

//-- server side uuid example ---
//import {uuidv4} from uuidv4()
//import uuid from require("uuid")

//client side / front-end 
//import {v4 as uuidv4} from "../../node_modules/uuid"
//import {v4 as uuidv4} from "uuid"

const outputDiv = document.getElementById("output");

document.getElementById("btn-uuid-demo-1").addEventListener("click",(e)=>{

    let msg = "";

    try {
       
        //msg = `## btn-uuid-demo-1: ${uuidv4()}`
        msg = `## btn-uuid-demo-1: `
        outputDiv.innerHTML = msg;

    } catch (error) {

        msg = "## btn-uuid-demo-1::error"
        outputDiv.innerHTML = msg;
        console.log(error)
    }
})