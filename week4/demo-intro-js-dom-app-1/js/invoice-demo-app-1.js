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
    
    msg = "(" + item1 + " + "  + item2 + ") = " + total;
    
    //rounding decimal point 
    
    _outputDiv.innerText = msg;

}

function calc_inv_ex2()
{    
    let msg = "## calc_inv_ex2"; //data type string 
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
    
    const item1 = "5";   //datatype = string 
    const item2 = 10.2; //datatype = floating point = decmal number 

    //mathematical expression 
    
    //-- convert string to integer ie: casting datatype 
    
    //parseInteger("5")
    //parseFloat("10.2")
    
    const total = (parseInt(item1) + item2);
    
    msg = "(" + item1 + " + "  + item2 + ") = " + total;
    
    //rounding decimal point 
    
    _outputDiv.innerText = msg;

}

function calc_inv_ex3()
{    
    let msg = "## calc_inv_ex3"; //data type string 
    console.log(msg)

    const _outputDiv = document.getElementById("output"); //data type - object

    if(_outputDiv == null | _outputDiv == undefined)
    {
        msg = "## output div is not found"
        console.log(msg)
        
        return false;
    }

    const item1 = "5";   //datatype = string 
    const item2 = 10.2; //datatype = floating point = decmal number 
    const item3 = 15.15; //datatype = floating point = decmal number 
    const item4 = 20.13; //datatype = floating point = decmal number 
    const item5 = "25.312"; //string 
    
    const total = (parseInt(item1) + item2 + item3 + item4 + parseFloat(item5));
    
    //rounding decimal point = .toFixed(2)
    //msg = "(" + item1 + " + "  + item2 +  "+" + item3 + " + " + item4 + " + " + item5  + ") = " + total.toFixed(2);
    
    //es5+ string parsing - string template literal - back tick ``
    msg = `(${item1} + ${item2} + ${item3} + ${item4} + ${item5} ) = ${total.toFixed(2)}`;
    
    _outputDiv.innerText = msg;

}


