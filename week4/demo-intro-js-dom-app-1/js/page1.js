function page_load()
{
    const msg = "### page1 load...";

    console.log(msg);
}

function func3()
{
    //default let 
    //msg = "function 3 called";

    const msg = "function 3 called";

    //alert(msg)
    console.log(msg)

}

function dom_ex5() {

    const msg = "### dom_ex5 called";
    console.log(msg)

    //select 1 or more elements using document - DOM library 
    const outputDiv = document.getElementById("output");

    /*
    if (outputDiv != null){
        //true 
    }
    else if (outputDiv != undefined) {
       //true 
    }
    else 
    {
      //default 
    }
    */

    //-- example of DOM - element, selection, element update, element style updaet etc..
    //--- ie: SPA: react, angularm, vue , bootstrap, css

    if (outputDiv != null | outputDiv != undefined){
        //true 
        //outputDiv.innerText = "<b>## update div element example. </b>";
        outputDiv.innerHTML = "<b>## update div element example. </b>";
        //update div style 
    }
    else
    {
        //false 
        console.log("## div output not found")
    }

}


