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
//- js callback methods - es1-4+ - called by javscript or within code 
//- js ananymous method  - es5+ - function witout a name - call function in-place withou creating a variable 
//- js arrow functions  - es5+
//- promises - es5+
//- async/await  - es5+
//- exception handling - es1-4+

//const btnajaxex1 = document.querySelector(",.btn-ajax-ex1")
//const btnajaxex1 = document.querySelector("#btn-ajax-ex1")
const btnajaxex1 = document.getElementById("btn-ajax-ex1").addEventListener("click", 
    /*callback/ananymous function*/ function(event){

    //-- can cancel or continue button click 
    //-- use default
    event.preventDefault();

    if(outputDev == null | outputDev == undefined){       
        const msg = "## api demo 1 - output div not found"
        console.log(msg) 
        return false;
    }

    const msg = "## btn-ajax-ex1";

    outputDev.innerText = msg;

});






