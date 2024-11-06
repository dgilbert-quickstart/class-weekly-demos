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


document.getElementById("btn-map-crud-ex1").addEventListener("click", (event)=>{

    let msg = "";
  
    //- MAP - ES6+ /2015+
    //map - key / value pairs ie: dictionary, or hashMap,
    // does not allow duplicate keys

    const items_map_1 = new Map([
        ["key1",1],
        ["key2",2]
    ]);

    try {
        
        msg =  "# btn-map-crud-ex1"
        outputDiv.innerText = msg
        console.log(msg)

        msg = ""

        //-- add or update 
        //-- i key does not exist key/value will be created 
        items_map_1.set("key3",3).set("key4",4).set("key5",5)
    
        //update value usign key 
        items_map_1.set("key5",5.1) 

        //-- delete 
        items_map_1.delete("key3")

        items_map_1.delete("key10")

        //## delete all 
        //items_map_1.clear()

        for(const item of items_map_1) {
            msg += `${item} <br>`
        }

        outputDiv.innerHTML = msg;


    } catch (error) {

        msg =  "# btn-map-crud-ex1: error"
        outputDiv.innerText = msg

        console.log(msg)
        console.log(error)
    }
});

document.getElementById("btn-map-filter-ex1").addEventListener("click", (event)=>{

    let msg = "";
    
    const items_map_1 = new Map([
        ["key1",1],
        ["key2",2]
    ]);

    try {
        
        msg =  "# btn-map-filter-ex1"
        outputDiv.innerText = msg
        console.log(msg)

        msg = ""

        if(items_map_1.has("key2")){
            msg = `## key2 exists in map <p>`
        }
        else
        {
            msg = `## key2 does NOT exist in map <p>`
        }

        msg += `<P>----keys or values ---</p>`
        
        //es6+ / 2015
        for(const [key, value] of items_map_1.entries()) {
            msg += `${key} - ${value} <br>`
        }    
        
        outputDiv.innerHTML = msg;


    } catch (error) {

        msg =  "# btn-map-filter-ex1: error"
        outputDiv.innerText = msg

        console.log(msg)
        console.log(error)
    }
});


