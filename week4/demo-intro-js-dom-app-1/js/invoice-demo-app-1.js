function page_load()
{
    const msg = "## invoice-demo-app-1 - page load"
    console.log(msg)
}

function calc_inv_ex1()
{    
    let msg = "## calc_inv_ex1"; //data type string 
    console.log(msg)

    const _outputDiv = document.getElementById("output"); //data type - object

    if(_outputDiv == null | _outputDiv == undefined)
    {
        msg = "## output div is not found"
        console.log(msg)
        
        //exit function, does not continue code after if statement
        return false;
    }

    //continue code after if statment 
    
    const item1 = 5;   //datatype = integer - non decimal number 
    const item2 = 10.2; //datatype = floating point = decmal number 

    //mathematical expression 
    const total = (item1 + item2);
    
    msg = "total = " + total;
    
    //rounding decimal point 
    
    _outputDiv.innerText = msg;

}


