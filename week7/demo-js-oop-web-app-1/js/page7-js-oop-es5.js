//page7-js-oop-es5.js

const outputDiv = document.getElementById("output");

document.getElementById("btn-es5-oop-ex1").addEventListener("click", (event)=>{

    let msg = "";
    
    try {
        
        msg =  "# btn-es5-oop-ex1"
        outputDiv.innerText = msg
        console.log(msg)
        
        //# define calss/template to be re-used - including methods, variables/properties 
        //- methods and properties can only be use with that class

        //es5 - define class with default data

        class Contact {

            //default call function are publily accessable 
            //- can make class functions and data private 

            constructor(name,email){
                this.name = name;
                this.email = email;
            }

            //publily accessable by default 
            getInfo()
            {
              return `## name:${this.name}, email: ${this.email}`   
            }
        }

        //# re-use calss - create a intsance or creat clas wirth data in memory 
        const person1 = new Contact("sam","sam@gmail.com");
        
        //person1.phone = "723-23-4384" //no-reccomended to dynamicall add properties 

        const person2 = new Contact("ann","ann@yahoo.com");

        msg = `person1: ${person1.getInfo()} <p>`;
        msg += `person2: ${person2.getInfo()} <p>`;
        
        outputDiv.innerHTML = msg;

    } catch (error) {

        msg =  "# btn-es5-oop-ex1: error"
        outputDiv.innerText = msg

        console.log(msg)
        console.log(error)
    }
});

