//page level global variable 

//access page element after page is loaded 
const outputDev = document.getElementById("output");
//const outputDev = document.querySelector("#output");
//const outputDev = document.querySelector(".output");

//XMLHttpRequest = xhr 
const xhr = new XMLHttpRequest();

//defind function to retrieve data 
/*ananymous/callback*/
xhr.onreadystatechange = function () {

    //## inside ananymous/callback function
    //this = refer to current/instance ananymous/callback function in-memory ie: variable 

    if (this.readyState === 4 && this.status === 200) {
        //data is avaliable 
        //JSON.parse - convert text json data to json object 
        console.log("## xjax/xhr - Users Data: " )
        console.log(JSON.parse(xhr.responseText));
        outputDev.innerText = xhr.responseText;
    }
}

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

//const btn_ajax_xhr_ex1 = document.querySelector(".btn-ajax-xhr-ex1")
//const btn_ajax_xhr_ex1 = document.querySelector("#btn-ajax-xhr-ex1")
const btn_ajax_xhr_ex1 = document.getElementById("btn-ajax-xhr-ex1").addEventListener("click", function(event){

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

    const _api_url_user_endpoint = "https://jsonplaceholder.org/users?id=1";
    const _api_url_comments_endpoint = "https://jsonplaceholder.org/comments?id=1";
    const _api_url_posts_endpoint = "https://jsonplaceholder.org/posts?id=1";
    const _url_giphy_endpoint = "";

    //request data 
    //call blocks until data is abaliavele by default
    //can me call asyncrynous - non blocking 
    xhr.open('GET', _api_url_user_endpoint, true);
    xhr.send();     

});

//const btn_jquery_ex1 = document.querySelector(".btn-jquery-ex1")
//const btn_jquery_ex1 = document.querySelector("#btn-jquery-ex1")
const btn_jquery_ex1 = document.getElementById("btn-jquery-ex1").addEventListener("click", function(event){

    event.preventDefault();

    if(outputDev == null | outputDev == undefined){       
        const msg = "## api demo 1 - output div not found"
        console.log(msg) 
        return false;
    }

    const msg = "## btn-jquery-ex1";

    outputDev.innerText = msg;

    const _api_url_user_endpoint = "https://jsonplaceholder.org/users?id=1";
    const _api_url_comments_endpoint = "https://jsonplaceholder.org/comments?id=1";
    const _api_url_posts_endpoint = "https://jsonplaceholder.org/posts?id=1";
    const _url_giphy_endpoint = "";
    const _url_data_file_enpoint = "./data/demo1.json";

    //jquery example javascript plugin reference 
    //src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js" defer

    //$.getJSON(_api_url_comments_endpoint, function(data, status)
    $.get(_api_url_comments_endpoint, function(data, status)
    {
        console.log("Jquery - Comments Data: " + "\nStatus: " + status)
        console.log(data);
        outputDev.innerText = JSON.stringify(data);
    });

});






