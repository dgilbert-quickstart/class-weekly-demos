//page level global variable 

//access page element after page is loaded 
const outputDev = document.getElementById("output");
//const outputDev = document.querySelector("#output");
//const outputDev = document.querySelector(".output");

function page_load()
{
    const msg = "## api demo 1 - page load"
    console.log(msg)

    if(outputDev == null | outputDev == undefined){       
        const msg = "## api demo 1 - output div not found"
        console.log(msg) 
        return false;
    }

    outputDev.innerText = msg;
}


//## using DOM to bind button events 
//-- js callback methods
//-- js ananymous method 
//-- exception handling 


