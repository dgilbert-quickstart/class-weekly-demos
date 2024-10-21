//week5/demo-intro-api-app-1/js/index.js

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
    //dynamic data type - composite data type - complex data types - can contain any valid datatype and collections, array/list,set,map etc

    //const obj2 = {"name":"name1", "price":"1.0"} //-- can create key/value is string  --
    const obj2 = {name:"name1", price:1.0} //object data tyep - also a JSON object - key/value 

    //json object array/list 
    const obj3 = [{name:"name1", price:1.0}] //ayyay/list of object data tyep - also a JSON object - key/value 

    //display object as string 
    //convert json object to string 
    //console.log(`### num2: ${num2}, obj2: ${obj2}`)
    //JSON.stringify(obj2)} = convert javascript object to string 
    console.log(`### num2: ${num2}, obj2: ${JSON.stringify(obj2)}`)

    //const _outputDiv = document.getElementById("output")
    const _outputDiv = document.querySelector("#output") //retrieve element by id 
    //const _outputDiv = document.querySelector(".output") //using css selector syntax

    if(_outputDiv == null | _outputDiv == undefined){

        msg = "## output div not found"
        console.log(msg)
        return false;
    }

    //display object as string 
    //convert json object to string 
    //JSON.stringify(obj2)} = convert javascript object to string 
    //_outputDiv.innerText = `num2: ${num2}, ${obj2}`;
    _outputDiv.innerText = `num2: ${num2}, ${JSON.stringify(obj2)}`;
    //_outputDiv.innerHTML = `num2: ${num2}, ${obj1}`;

}

function js_obj_ex2()
{
    const msg = "## js object example 2" // string 
    console.log(msg)

    const num1 = 5      //integer - non decimal 
    const num2 = 5.1    //float - decimal point 

    const obj1 = {} //empty object data type - also a JSON object 
    
    const obj2 = {name:"name1", price:1.0} //object data tyep - also a JSON object - key/value 

    const obj3 = [{name:"name1", price:1.0}] //ayyay/list of object data tyep - also a JSON object - key/value 
    
    //const _outputDiv = document.getElementById("output")
    //const _outputDiv = document.querySelector("#output") //retrieve element by id 
    const _outputDiv = document.querySelector(".output") //using css selector syntax

    if(_outputDiv == null | _outputDiv == undefined){

        msg = "## output div not found"
        console.log(msg)
        return false;
    }

    //-- console.log json data 
    console.log(`### num2: ${num2}, obj2: ${JSON.stringify(obj2)}`)

    //_outputDiv.innerText = `num2: ${num2}, ${JSON.stringify(obj2)}`;
    //addess object data 
    _outputDiv.innerText = `num2: ${num2}, name: ${obj2.name}, price: ${obj2.price}`;
    
}


function js_obj_ex3()
{
    const msg = "## js object example 2" // string 
    console.log(msg)

    const num1 = 5      //integer - non decimal 
    const num2 = 5.1    //float - decimal point 

    const obj1 = {} //empty object data type - also a JSON object 
    
    const obj2 = {name:"name1", price:1.0} //object data tyep - also a JSON object - key/value 

    //ayyay/list of object data tyep - also a JSON object - key/value 
    const obj3 = 
        [ {name:"name1", price:1.0},
          {name:"name2", price:1.2},
          {name:"name3", price:1.3}
        ];

    //const _outputDiv = document.getElementById("output")
    const _outputDiv = document.querySelector("#output") //retrieve element by id 
    //const _outputDiv = document.querySelector(".output") //using css selector syntax

    if(_outputDiv == null | _outputDiv == undefined){

        msg = "## output div not found"
        console.log(msg)
        return false;
    }

    //-- console.log json data 
    console.log(`### num2: ${num2}, obj2: ${JSON.stringify(obj3)}`)

    //_outputDiv.innerText = `num2: ${num2}, ${JSON.stringify(obj2)}`;
    //addess object data 
    //_outputDiv.innerText = `num2: ${num2}, name: ${obj2.name}, price: ${obj2.price}`;
    //json object array index ie: 1 = 2nd row 
    _outputDiv.innerText = `num2: ${num2}, name: ${obj3[1].name}, price: ${obj3[1].price}`;
    
}


