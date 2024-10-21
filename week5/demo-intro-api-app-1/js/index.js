function page_load()
{
    const msg = "## demo api app - page load"
    console.log(msg);
}


function js_obj_ex1()
{
    const msg = "## js object example 1" // string 
    console.log(msg)

    const num1 = 5      //integer - non decimal 
    const num2 = 5.1    //float - decimal point 

    const obj1 = {} //empty object data type - also a JSON object 
    //dynamic - complex data types - can contain any valid datatype and collections, array/list,set,map etc

    const obj2 = {name:"name1", price:1.0} //object data tyep - also a JSON object - key/value 

    //display object as string 
    //convert json object to string 
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

