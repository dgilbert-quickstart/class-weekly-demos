import {useState} from "react"

function ContactUs2() {

  const [msg, setMsg] = useState("")
  const [txtname, setName] = useState("")

  const btnHandleFormValidation = (event)=>
    {
      event.preventDefault();

      try {
        
        let _msg = "## btnHandleFormValidation"
        console.log(_msg)

        //## update state 
        setMsg(_msg)

    
      } catch (error) {        
        const _msg = "## btnHandleFormValidation::Error"
        console.log(_msg)
        console.log(error)
      
      }

    }

    const handleNameChange = (event)=>
      {
        event.preventDefault();
  
        try {
          
          let _msg = "## handleNameChange"
          console.log(_msg)
  
          //## update state 
          setMsg(_msg)
  
      
        } catch (error) {        
          const _msg = "## handleNameChange::Error"
          console.log(_msg)
          console.log(error)
        
        }
  
      }
  
    return (
      <>
          <p></p>
          <p>Contact Us 2 page/component - 1.0.1</p>
          <p>{msg}</p>
          <div className="output"></div>
          <p></p>
          <div>
            <form>
              <label>* Name: </label><input type="text" maxLength={20}></input><br></br>
              <label>* Email: </label><input  type="text"  maxLength={30}></input><br></br>
              <label> Phone: </label><input type="text"  maxLength={15}></input><br></br>
              <label>* Comment: </label><br></br>
              <textarea  rows={5} cols={30}></textarea><p></p>
              <button onClick={btnHandleFormValidation}>Submit</button>
              {"   "}
              <button>reset</button>
            </form>
          </div>
      </>
    );
}
  
export default ContactUs2;


