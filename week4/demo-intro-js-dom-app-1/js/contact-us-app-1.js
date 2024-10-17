function page_load()
{
    const msg = "## contact-us - page load";
    console.log(msg)
}

function form_submit()
{
    let msg = "## contact-us - form_submit";
    console.log(msg)

    const _outputDev = document.getElementById("output");

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

    if(_txtname_ele == null | _txtname_ele == undefined) {

        msg = "#1# name is required";
        console.log(msg)

        _outputDev.innerText = msg;

        return false;
    }
    else if (_txtname_ele.value.length == 0)
    {
        msg = "#2# name is required";
        console.log(msg)

        _outputDev.innerText = msg;

        return false;   
    }

    return false;
}

function form_reset()
{
    let msg = "## contact-us - form-rest";
    console.log(msg)
}

