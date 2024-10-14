
//function is a name given to a 1 or more js code staments 
function func2()
{
    let msg1 = "### Js intro "
    const msg2 = "es1..es5+";

    const msg = msg1 + msg2;

    //alert(msg1 + msg2);
    alert(msg)

    console.log(msg);
}

function page_load()
{
    const msg = "### page load function called..page displayed";

    //alert(msg)
    console.log(msg)
}


function dom_ex1()
{
  
    const msg = "### dom_ex1";

    //alert(msg)
    console.log(msg)   

    //using DOM - (Document Object Model) select 1 or more elements in htrml page 
    const outputDiv = document.getElementById("output");

    //----logical expression ------
    //00 evaluate if left and right values re true or false
    //if (1 == b or b != c or a != b) etc..
    //if (a and b)
    // | == or 
    //null - does not not value 
    //undefined = never defind/or created 

    if(outputDiv == null | outputDiv == undefined)
    {
        //-- true -- 
        alert("### outputDiv is not defined<")
        console.log("### outputDiv is not defined")
    }
    else
    {
        //-- false -- 
        //dynamically update web page - any valida html or text code 
        //ie: react, angular, vue 
        outputDiv.innerText = "* <b>outputDiv updated</b>"
        //outputDiv.innerHTML = "* <b>outputDiv updated</b>"
    }

}


