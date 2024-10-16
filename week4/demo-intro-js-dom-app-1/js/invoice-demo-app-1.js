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

function calc_inv_ex4()
{    
    let msg = "## calc_inv_ex4";  
    console.log(msg)

    const _outputDiv = document.getElementById("output"); 

    if(_outputDiv == null | _outputDiv == undefined)
    {
        msg = "## output div is not found"
        console.log(msg)
        
        return false;
    }

    //array/list - stroe a sequence of items in memory 
    // - use index to access items ie: 0..1..2.. instread  variable1..variable2

    //list = list of items of same datatype or different data type 
    //ie: string, number
    const items_list = ["5",10.2,15.15,20.13,"25.312"]
    
    //array = list of items of same data
    //ie: number datatype 
    const items_array = [5,10.2,15.15,20.13,25.312]
    
    //array/list index - start at 0 to 1-length 
    //ie: 5 array/list items = index = 0-4

    //const total = (parseInt(item1) + item2 + item3 + item4 + parseFloat(item5));
    //const total = (parseInt(items_array[0]) + items_array[1] + items_array[2] + items_array[3] + parseFloat(items_array[4]));
    const total = (parseInt(items_list[0]) + items_list[1] + items_list[2] + items_list[3] + parseFloat(items_list[4]));
    
    //es5+ string parsing - string template literal - back tick ``
    //msg = `(${item1} + ${item2} + ${item3} + ${item4} + ${item5} ) = ${total.toFixed(2)}`;
    //msg = `(${items_array[0]} + ${items_array[1]} + ${items_array[2]} + ${items_array[3]} + ${items_array[4]} ) = ${total.toFixed(2)}`;
    msg = `(${items_list[0]} + ${items_list[1]} + ${items_list[2]} + ${items_list[3]} + ${items_list[4]} ) = ${total.toFixed(2)}`;
    
    _outputDiv.innerText = msg;

}




