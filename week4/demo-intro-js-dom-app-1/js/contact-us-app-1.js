function page_load()
{
    const msg = "## contact-us - page load";
    console.log(msg)

    const _txtname_ele = document.getElementById("txtname");
    //const _txtname_ele = document.querySelector(".txtname");
    //const _txtname_ele = document.querySelector("#txtname");

    _txtname_ele.focus();

    /*
    -- css to se focus on a field 
    CSS pseudo class like .selector:focus:    
    https://www.w3schools.com/cssref/css_ref_pseudo_classes.php
    */
}

function form_submit()
{
    let msg = "## contact-us - form_submit";
    console.log(msg)

    const _outputDev = document.getElementById("output");
    //const _outputDev = document.querySelector(".output");
    //const _outputDev = document.querySelector("#output");

    if(_outputDev == null | _outputDev == undefined)
    {
        msg = "## output div not found."
        console.log(msg);
        return false;
    }

    _outputDev.innerText = msg;

    //<button onclick="return form_submit()">submit</button> &nbsp;

    //-- return false - stop submit 
    //-- do not send data to another web site e / current website is default
    //return true = send data to another webiste / current website is default

    //-- form validation --- 
    //-- name is required , must not be empty, lengeht <= 20 characters 
    //-- email is required , must not be empty, lengeht <= 100 characters 
    //-- comment is required , must not be empty, lengeht <= 200 characters 
    //-- display error message next to field, highlight error field 
    //-- display all fields which has error 

    const _txtname_ele = document.getElementById("txtname");
    const _txtemail_ele = document.getElementById("txtemail");
    const _txtphone_ele = document.getElementById("txtphone");
    const _txtcomment_ele = document.getElementById("txtcomment");

    const _txtname_error_ele = document.getElementById("txtname-error");
    //const _outputDev = document.querySelector(".txtname-error");
    //const _outputDev = document.querySelector("#txtname-error");

    //-- learn more at w3schools.com 
    //const _ele_list = document.getElementsByClassName(".txtname-error");

    //const _txtname_error_ele = document.querySelector(".txtname-error"); //# css selector, select 1st element
    //const _txtname_error_ele = document.querySelector("#txtname-error"); //# css selector, select 1st element

    //-- hide the error label by default 
    //refactor: add code to page_load and clear link
    _txtname_error_ele.style.display = "none";

    //add remove style
    //_txtname_error_ele.classList.add("name-error-class-1") ;
    //_txtname_error_ele.classList.remove("name-error-class-1") ;

    _txtname_ele.style.borderBlockColor = "initial";

    //store all error messages 
    let _error_msg = "";

    //let _error_msg_array = new Array(); //create empty array 
    let _error_msg_array = []; //create empty array  

    if(_txtname_ele == null | _txtname_ele == undefined) {

        msg = "#1# name is required";
        console.log(msg)

        _outputDev.innerText = msg;

        //-- displsy error label
        _txtname_error_ele.style.display = "inline";
            
        //add remove style
        //_txtname_error_ele.classList.add("name-error-class-1") ;
        //_txtname_error_ele.classList.remove("name-error-class-1") ;

        _txtname_ele.style.borderBlockColor = "red";

        //update error message , add current error message to previous error message variable 
        //ie: contatinating/combining strings variables 
        _error_msg = _error_msg + msg + " , ";
        
        //add items to array 
        _error_msg_array.push(msg);

        //return false;
    }
    else if (_txtname_ele.value.trim().length == 0 | _txtname_ele.value == "")
    {
        msg = "#2# name is required";
        console.log(msg)

        _outputDev.innerText = msg;

        //-- displsy error label
        _txtname_error_ele.style.display = "inline";
            
        //add remove style
        //_txtname_error_ele.classList.add("name-error-class-1") ;
        //_txtname_error_ele.classList.remove("name-error-class-1") ;

        _txtname_ele.style.borderBlockColor = "red";
        
        //update error message , add current error message to previous error message variable 
        //ie: contatinating/combining strings variables 
        _error_msg = _error_msg + msg + " , ";
        
        //add items to array 
        _error_msg_array.push(msg);

        //return false;   
    }
    
    if(_txtemail_ele == null | _txtemail_ele == undefined) {

        msg = "#1# email is required";
        console.log(msg)

        _outputDev.innerText = msg;
        
        //concatinate error messages ie: prev msg + current error messages
        _error_msg = _error_msg + msg + " , ";

        //add items to array 
        _error_msg_array.push(msg);

        //return false;
    }
    else if (_txtemail_ele.value.trim().length == 0 | _txtemail_ele.value == "")
    {
        msg = "#2# email is required";
        console.log(msg)

        _outputDev.innerText = msg;

        //concatinate error messages ie: prev msg + current error messages
        _error_msg = _error_msg + msg + " , ";
        
        //add items to array 
        _error_msg_array.push(msg);

        //return false;   
    }

    if(_txtcomment_ele == null | _txtcomment_ele == undefined) {

        msg = "#1# comment is required";
        console.log(msg)

        _outputDev.innerText = msg;

        //concatinate error messages ie: prev msg + current error messages
        _error_msg = _error_msg + msg + " , ";
        
        //add items to array 
        _error_msg_array.push(msg);
        
        //return false;
    }
    else if (_txtcomment_ele.value.trim().length == 0 | _txtcomment_ele.value == "")
    {
        msg = "#2# comment is required";
        console.log(msg)

        _outputDev.innerText = msg;

        //concatinate error messages ie: prev msg + current error messages
        _error_msg = _error_msg + msg + " , ";

        //add items to array 
        _error_msg_array.push(msg);
        
        //return false;   
    }

    //if there are form field error - display form field errors
    //if(_error_msg.length > 0)
    if(_error_msg_array.length > 0)
    {
        //_outputDev.innerText = _error_msg;     
        //-- display array element as comma seperated string     
        //_outputDev.innerText = _error_msg_array.toString();
    
        _outputDev.innerHTML = "<ul>";

        //### html string parcing -- error prome for more complex ui/ux 
        //## generating html using string 
        //## refactor - document.createelement, SPA: document.appendchild ie: angular, react, vue 

        for(i=0;i<=_error_msg_array.length-1;i++)
        {
            //console.log(_error_msg_array[i]);
            //_outputDev.innerHTML =  _outputDev.innerHTML + _error_msg_array[i] + "<br>";
            _outputDev.innerHTML +=  "<li>" + _error_msg_array[i] + "</li>";
        }

        _outputDev.innerHTML += "</ul>"

        return false; //do not send form data
    }

    //no errors, continue code here 

    msg = "## comment sent";
    console.log(msg)

    _outputDev.innerText = msg;

    //-log form data - 
    msg = `## ${_txtname_ele.value} - ${_txtemail_ele.value} - ${_txtphone_ele.value} - ${_txtcomment_ele.value}`;
    console.log(msg);

    //-- clear form  field -- 
    //- refactor: create a functioon to clear form fields ie: clear_form_fields()
    //- refact: add code to page_load()

    _txtname_ele.value = ""; 
    _txtemail_ele.value = ""; 
    _txtphone_ele.value = ""; 
    _txtcomment_ele.value = ""; 

    //move cussor focus to txtname 
    //- refact: add code to page_load()
    _txtname_ele.focus();

    //return true; //send form data to server - default 
    return false; //do not send form data to server
}

function form_reset()
{
    let msg = "## contact-us - form-rest";
    console.log(msg)
    
    const _outputDev = document.getElementById("output");
    //const _outputDev = document.querySelector(".output");
    //const _outputDev = document.querySelector("#output");

    const _txtname_ele = document.getElementById("txtname");
    const _txtemail_ele = document.getElementById("txtemail");
    const _txtphone_ele = document.getElementById("txtphone");
    const _txtcomment_ele = document.getElementById("txtcomment");

    const _txtname_error_ele = document.getElementById("txtname-error");

    //-- learn more at w3schools.com 
    //const _ele_list = document.getElementsByClassName(".txtname-error");
    
    //const _txtname_error_ele = document.querySelector(".txtname-error"); //# css selector, select 1st element
    //const _txtname_error_ele = document.querySelector("#txtname-error"); //# css selector, select 1st element

    
    if(_txtname_ele == null | _txtname_ele == undefined) {

        msg = "## name is null or undefined";
        console.log(msg)

        _outputDev.innerText = msg;

        return false;
    }

    //if(_outputDiv == null | _outputDiv == undefined) 

    //if(_txtemail_ele == null | _txtemail_ele == undefined) 

    //if(_txtphone_ele == null | _txtphone_ele == undefined) 
    
    //if(_txtcomment_ele == null | _txtcomment_ele == undefined) 
    
    //-- clear form  field -- 
    //- refactor: create a functioon to clear form fields ie: clear_form_fields()
    //- refact: add code to page_load()
    
    _txtname_error_ele.style.display = "none";
    
    _txtname_ele.value = ""; 
    _txtemail_ele.value = ""; 
    _txtphone_ele.value = ""; 
    _txtcomment_ele.value = ""; 

    _outputDev.innerText = "";

    //move cussor focus to txtname 
    //- refact: add code to page_load()
    _txtname_ele.focus();

}

