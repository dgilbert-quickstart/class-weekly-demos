
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

        //http://developers.giphy.com/docs/api
        //https://developers.giphy.com/docs/api/endpoint#search
        //http://developers.giphy.com/docs/explorer

        const _giphy_apikey = "demo-example-api-key-Ab2422Ab43"
        const _giphy_url_demo_1 = "https://api.giphy.com/v1/gifs/search?api_key=&q=";
        const _giphy_url_demo_2 = "https://api.giphy.com/v1/gifs/search?q=&api_key=";

        const _search_text = "cars"; //retieve search text from input field
        const _giphy_url_1 = `https://api.giphy.com/v1/gifs/search?api_key=${_giphy_apikey}&q=${_search_text}`;
        const _giphy_url_2 = `https://api.giphy.com/v1/gifs/search?q=${_search_text}&api_key=${_giphy_apikey}`;

        //## can add other parameters ie: search limit, etc..

    } catch (error) {

        console.log("## btn-giphy-api-ex1 - error ")
        console.log(error)

        msg = "## btn-giphy-api-ex1 - error ";
        outputDiv.innerText = msg;
    }

})



