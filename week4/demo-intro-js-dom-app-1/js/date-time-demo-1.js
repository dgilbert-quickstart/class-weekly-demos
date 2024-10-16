//-- Global memory 
//-- memory clean when page exit or unload 
//-- can store mrmory at page level - memory will be available until page unload 

const gloabl_page_datetime = new Date(); //js object data type = Date 

function page_load()
{
    let msg = "## date-time page load"; //date type = string - short term memory - stack memory 

    console.log(msg)

    //js - create snapshot of current browser/system [date] and [time]     
    //new keyword = creates a block/reserve of object/date in long term memory - heap memory - more memory space 
    const _datetime = new Date(); //js object data type = Date 

    const _lbldate = document.getElementById("lbldate");

    //if (_lbldate != null | _lbldate != undefined )

    //_lbldate.innerText = _datetime;  //date time timezone     
    //_lbldate.innerText = _datetime.getMonth() + "/" + _datetime.getDate() + "/" + _datetime.getFullYear();  //date 

    //getMonth = 0-11 
    //getDate = day

    //mathematical expression - return a numeric value 
    //- (a+b) 
    //- ((a+b)*c)

    _lbldate.innerText = (_datetime.getMonth() + 1) + "/" + _datetime.getDate() + "/" + _datetime.getFullYear();  //date 

    //objects ie: new Date() -- has pre-deined functions 
    //msg.getMonth() //error - method is not associated with string variable 

    const _lbltime = document.getElementById("lbltime"); //data type = object / HtmlElement

    //if (_lbltime != null | _lbltime != undefined )
    //_lbltime.innerText =  "<i>" + _datetime.getHours() + ":" + _datetime.getMinutes() + "</i>";
    _lbltime.innerHTML =  "<i>" + _datetime.getHours() + ":" + _datetime.getMinutes() + "</i>";
    _lbltime.style.backgroundColor = "#f2f200"

    //Display the datatype of variable

    console.log("## datatype msg: ", typeof(msg)) //string
    console.log("## datatype datetime: ", typeof(_datetime)) //object / Date
    console.log("## datatype lbltime: ", typeof(_lbltime)) //object / HtmlElement

}
//after function completes, auto clean up memory 


