function page_load()
{
    const msg = "## demo api app - page load"
    console.log(msg);
}


function js_obj_ex1()
{
    const msg = "## js object example 1"
    console.log(msg)

    const num1 = 5
    const num2 = 5.1

    const obj1 = {} //empty object data tyep - also a JSON object 
    
    const obj2 = {name:"name1", price:1.0} //object data tyep - also a JSON object 

    console.log(`obj2: ${obj2}`)

    //const _outputDiv = document.getElementById("output")
    const _outputDiv = document.querySelector("#output") //retrieve element by id 
    //const _outputDiv = document.querySelector(".output") //using css selector syntax

    if(_outputDiv == num1 | _outputDiv == undefined){

        msg = "## output dic not found"
        console.log(msg)
        return false;
    }

    _outputDiv.innerText = obj1;
    //_outputDiv.innerHTML = obj1;

}

