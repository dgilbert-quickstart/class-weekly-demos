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

        msg =  "# btn-es4-oop-ex1: error"
        outputDiv.innerText = msg

        console.log(msg)
        console.log(error)
    }
});


