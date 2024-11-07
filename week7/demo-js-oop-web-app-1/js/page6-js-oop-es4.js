//page6-js-oop-es4.js

const outputDiv = document.getElementById("output");

document.getElementById("btn-es4-oop-ex1").addEventListener("click", (event)=>{

    let msg = "";
    
    try {
        
        msg =  "# btn-es4-oop-ex1"
        outputDiv.innerText = msg
        console.log(msg)
        
        //# define calss/template to be re-used - including methods, variables/properties 
        //- methods and properties can only be use with that class

        //es4 - define class with default data 
        //-- class data is shared 
        const contact = {
            name:"ann",
            email:"ann@gmail.com",
            getInfo: function()
            {
                //this = get data for the current instace/copy of object in memory/space 
                //return "## name: " + name + ", " + this.email
                return "## name: " + this.name + ", " + this.email
            }
        }

        //# re-use calss - create a intsance or creat clas wirth data in memory 
        const person1 = contact //shared opy /reference

        msg = `es4 oop - person1: ${person1.getInfo()} <p>`

        //another copy of object in memoy 
        const person2 = contact  //shared opy /reference
        person2.name = "sam"
        person2.email = "sam@yahoo.com"
        person2.phone = "120-383-3478" //dynamically add new fields , only availabe in javasctipt

        msg += `es4 oop - person2: ${person2.getInfo()}, phone: ${person2.phone} <p>`

        //data in person 1 memory is shared data is overwritten
        msg += `es4 oop -shared/data- person1: ${person1.getInfo()} , phone: ${person1.phone}<p>`

        outputDiv.innerHTML = msg;


    } catch (error) {

        msg =  "# btn-es4-oop-ex1: error"
        outputDiv.innerText = msg

        console.log(msg)
        console.log(error)
    }
});


document.getElementById("btn-es4-oop-ex2").addEventListener("click", (event)=>{

    let msg = "";
    
    try {
        
        msg =  "# btn-es4-oop-ex2"
        outputDiv.innerText = msg
        console.log(msg)
        
        //# define calss/template to be re-used - including methods, variables/properties 
        //- methods and properties can only be use with that class

        //es4 - define class with default data 
        //-- class data is shared 
        const contact = {
            name:"ann",
            email:"ann@gmail.com",
            getInfo: function()
            {
                //this = get data for the current instace/copy of object in memory/space 
                //return "## name: " + name + ", " + this.email
                return "## name: " + this.name + ", " + this.email
            }
        }

        //# re-use calss - create a intsance or creat clas wirth data in memory 
        //const person1 = contact //copy 
        const obj1 = contact 
        //const person1 = Object.create(obj1) //new instance/copy of oject in memory, unique objwct 
        const person1 = Object.create(contact) //new instance/copy of oject in memory, unique objwct 
        //ie: new contact()

        msg = `es4 oop - person1: ${person1.getInfo()} <p>`

        //another copy of object in memoy 
        //const person2 = contact //copy 
        const obj2 = contact //copy 
        //const person2 = Object.create(obj2) //new instance/copy of oject in-memory, unique objwct
        const person2 = Object.create(contact) //new instance/copy of oject in-memory, unique objwct
        //ie: new contact()

        person2.name = "sam"
        person2.email = "sam@yahoo.com"
        person2.phone = "120-383-3478" //dynamically add new fields , only availabe in javasctipt

        msg += `es4 oop - person2: ${person2.getInfo()}, phone: ${person2.phone} <p>`

        //data in person 1 memory is shared data is overwritten
        msg += `es4 oop -shared/data- person1: ${person1.getInfo()} , phone: ${person1.phone}<p>`

        outputDiv.innerHTML = msg;


    } catch (error) {

        msg =  "# btn-es4-oop-ex2: error"
        outputDiv.innerText = msg

        console.log(msg)
        console.log(error)
    }
});


document.getElementById("btn-es4-func-oop-ex3").addEventListener("click", (event)=>{

    let msg = "";
    
    try {
        
        msg =  "# btn-es4-func-oop-ex3"
        outputDiv.innerText = msg
        console.log(msg)
        
        //class/template definition
        //function initilization / constructor 
        //-function with paramerer
        //- constructor - used to initialize call data when class instance is created in memory 
        //-- used in react:        
        function contact(name, email) {
            this.name = name
            this.email = email
            this.getInfo = function()
            {
                //this = get data for the current instace/copy of object in memory/space 
                //return "## name: " + name + ", " + this.email
                return "## name: " + this.name + ", " + this.email
            }
        }

        //# re-use calss - create a intsance or creat clas wirth data in memory 
        const person1 = new contact("sam","sam@gmail.com")

        const person2 = new contact("ann","ann@yahoo.com")
    
        //person1.phone = "1268-26-267"
        person1["phone"] = "1268-26-267"

        msg = `## preson1 : ${person1.getInfo()} , phone: ${person1.phone}<p>`
        msg += `## preson2 : ${person2.getInfo()} , phone: ${person2.phone}<p>`
        msg += `## preson1 : ${person1.getInfo()} , phone: ${person1.phone}<p>`

        outputDiv.innerHTML = msg;


    } catch (error) {

        msg =  "# btn-es4-func-oop-ex3: error"
        outputDiv.innerText = msg

        console.log(msg)
        console.log(error)
    }
});


