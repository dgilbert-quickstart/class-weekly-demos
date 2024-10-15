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


}


