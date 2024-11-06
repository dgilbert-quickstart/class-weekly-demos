//page5-ds-map.js

const outputDiv = document.getElementById("output");

document.getElementById("btn-map-index-ex1").addEventListener("click", (event)=>{

    let msg = "";
    
    //- MAP - ES6+ /2015+
    //map - key / value pairs ie: dictionary, or hashMap,
    // does not allow duplicate keys

    //new - create set object in memory 
    //- map object has pre-defined functions 

    const items_map_1 = new Map([
        ["key1",1],
        ["key2",2]
    ]);

    try {
        
        msg =  "# btn-set-index-ex1"
        outputDiv.innerText = msg
        console.log(msg)
        
        msg = `---map.size: ${items_map_1.size}<p>`
        
        msg += `--- map.get(key1) ${items_map_1.get("key1")}-<p>`
        
        msg += "---for of --<p>"
        
        //es5+ / 2015
        for(const item of items_map_1) {
            msg += `${item} <br>`
        }
        
        outputDiv.innerHTML = msg;


    } catch (error) {

        msg =  "# btn-set-index-ex1: error"
        outputDiv.innerText = msg

        console.log(msg)
        console.log(error)
    }
});


document.getElementById("btn-map-loop-ex1").addEventListener("click", (event)=>{

    let msg = "";
      
    //- MAP - ES6+ /2015+
    //map - key / value pairs ie: dictionary, or hashMap,
    // does not allow duplicate keys

    const items_map_1 = new Map([
        ["key1",1],
        ["key2",2]
    ]);

    try {
        
        msg =  "# btn-map-loop-ex1"
        outputDiv.innerText = msg
        console.log(msg)

        msg += "---for of --<p>"
        
        for(const item of items_map_1) {
            msg += `${item} <br>`
        }

        msg += "<p>---for of keys--<p>"
        
        for(const item of items_map_1.keys()) {
            msg += `${item} <br>`
        }

        msg += "<p>---for of values--<p>"
        
        for(const item of items_map_1.values()) {
            msg += `${item} <br>`
        }

        
        msg += "<p>---for of entities--<p>"
        
        for(const [key,value] of items_map_1.entries()) {
            msg += `${key} -> ${value} <br>`
        }

        msg += "<p>---foreach--<p>"

        items_map_1.forEach((value,key) => {
            msg += `${key} = ${value} <br>`
        })

        outputDiv.innerHTML = msg;


    } catch (error) {

        msg =  "# btn-map-loop-ex1: error"
        outputDiv.innerText = msg

        console.log(msg)
        console.log(error)
    }
});

/*
document.getElementById("btn-set-crud-ex1").addEventListener("click", (event)=>{

    let msg = "";
    
    const items_list_1 = [1,2,3,4,3,5,6,7,5];
    const items_set_1 = new Set(items_list_1);

    try {
        
        msg =  "# btn-set-crud-ex1"
        outputDiv.innerText = msg
        console.log(msg)

        msg = ""

        //-- add 
        //-- function chaining ---
        items_set_1.add(8).add(9).add(3)

        //-- delete 
        items_set_1.delete(3)

        //-- delete 
        items_set_1.delete(9)
        
        //-- delete 
        items_set_1.delete(10)

        //### no update at index 

        //## delete all 
        //items_set_1.clear()

        //es5+ / 2015
        for(const item of items_set_1) {
            msg += `${item} <br>`
        }

        outputDiv.innerHTML = msg;


    } catch (error) {

        msg =  "# btn-set-crud-ex1: error"
        outputDiv.innerText = msg

        console.log(msg)
        console.log(error)
    }
});


document.getElementById("btn-set-filter-ex1").addEventListener("click", (event)=>{

    let msg = "";
    
    const items_list_1 = [1,2,3,4,3,5,6,7,5];
    const items_set_1 = new Set(items_list_1);

    try {
        
        msg =  "# btn-set-filter-ex1"
        outputDiv.innerText = msg
        console.log(msg)

        msg = ""

        if(items_set_1.has(5)){
            msg = `## item 5 exists in set <p>`
        }
        else
        {
            msg = `## item 5 does NOT exist in set <p>`
        }

        //es5+ / 2015
        for(const [key, value] of items_set_1.entries()) {
            msg += `${key} - ${value} <br>`
        }

        msg += `<P>----keys or values ---</p>`
        
        //es5+ / 2015
        //for(const item of items_set_1.keys()) {
        for(const item of items_set_1.values()) {
            msg += `${item} <br>`
        }

        outputDiv.innerHTML = msg;


    } catch (error) {

        msg =  "# btn-set-filter-ex1: error"
        outputDiv.innerText = msg

        console.log(msg)
        console.log(error)
    }
});

*/

