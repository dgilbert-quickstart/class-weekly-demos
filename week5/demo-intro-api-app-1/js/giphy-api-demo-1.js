
//const outputDiv = document.querySelector(".output");
//const outputDiv = document.querySelector("#output");
const outputDiv = document.getElementById("output");

async function page_load()
{
    const msg = "## giphy api demo 1 - page load"
    console.log(msg)

    if(outputDiv == null | outputDiv == undefined){       
        const msg = "## giphy api demo 1 - output div not found"
        console.log(msg) 
        return false;
    }
 
    outputDiv.innerText = msg;
}


