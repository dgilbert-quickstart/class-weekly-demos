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



document.getElementById("btn-es5-oop-inherit-ex1").addEventListener("click", (event)=>{

    let msg = "";
    
    try {
        
        msg =  "# btn-es5-oop-inherit-ex1"
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

        //class Person inherts all functionality from Contact
        class Person extends Contact
        {
            constructor(name,email,phone){
                supert(name,email)
                this.phone = phone;
            }

            //can override getInfo()
            //same mthod in both classes = polimorphism 
            //can call parent/super method of subclass/child method 
        }

        //# re-use calss - create a intsance or creat clas wirth data in memory 
        const contact1 = new Contact("sam","sam@gmail.com");
        const person1 = new Person("jan","jan@yahoo.com", "327-123-4371");
        
        //person1.phone = "723-23-4384" //no-reccomended to dynamicall add properties 

        const contact2 = new Contact("ann","ann@yahoo.com");
        const person2 = new Person("tim","tim@msy.com", "623-132-6732");

        msg = `contact1: ${contact1.getInfo()}, phone:n/a <p>`;
        msg += `contact2: ${contact2.getInfo()}, phone: n/a <p>`;
        msg += `person1: ${person1.getInfo()}, phone: ${person1.phone} <p>`;
        msg += `person2: ${person2.getInfo()}, phone: ${person2.phone} <p>`;
        
        outputDiv.innerHTML = msg;

    } catch (error) {

        msg =  "# btn-es5-oop-inherit-ex1: error"
        outputDiv.innerText = msg

        console.log(msg)
        console.log(error)
    }
});

