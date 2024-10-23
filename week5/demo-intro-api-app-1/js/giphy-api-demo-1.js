
//const outputDiv = document.querySelector(".output");
//const outputDiv = document.querySelector("#output");
const outputDiv = document.getElementById("output");

async function page_load()
{
    
    //
    //-- try -- catch error handler 
    //- when an error occurs inside the try code 
    //- code continues to the catch block
    //

    try {
                    
        const msg = "## giphy api demo 1 - page load"
        console.log(msg)

        if(outputDiv == null | outputDiv == undefined){       
            const msg = "## giphy api demo 1 - output div not found"
            console.log(msg) 
            return false;
        }
    
        outputDiv.innerText = msg;

    } catch (error) {

        console.log("## gihpy demo appp 1 - error ")
        console.log(error)

        msg = "## gihpy demo appp 1 - error ";
        outputDiv.innerText = msg;
    }
}


document.getElementById("btn-giphy-api-ex1").addEventListener("click",async =>{

    try {
                    
        const msg = "## btn-giphy-api-ex1"
        console.log(msg)

        if(outputDiv == null | outputDiv == undefined){       
            const msg = "## giphy api demo 1 - output div not found"
            console.log(msg) 
            return false;
        }
    
        outputDiv.innerText = msg;

    } catch (error) {

        console.log("## btn-giphy-api-ex1 - error ")
        console.log(error)

        msg = "## btn-giphy-api-ex1 - error ";
        outputDiv.innerText = msg;
    }

})



