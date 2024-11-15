import {useRef} from "react";

function ContactUs() {

    //ie: const outputDiv = document.getElementById("output")
    const outputDiv = useRef("");

    const txtname = useRef("");
    const txtemail = useRef("");

    //react includes event object as first parameter 
    //function btnHandleFormValidation(event)
    const btnHandleFormValidation = (event)=>
    {
      event.preventDefault();

      try {
        
        let _msg = "## btnHandleFormValidation"

        //alert(_msg)
        outputDiv.current.innerText = _msg
        console.log(_msg)

        if(txtname.current.value == null | txtname.current.value.trim().length == 0) {
          _msg = "## please enter a valid name"
          outputDiv.current.innerText = _msg;
        }

        if(txtemail.current.value == null | txtemail.current.value.trim().length == 0) {
          _msg = "## please enter a valid email"
          outputDiv.current.innerText = _msg;
        }

      } catch (error) {        
        const _msg = "## btnHandleFormValidation::Error"
        //alert(_msg)
        outputDiv.current.innerText = _msg
        console.log(_msg)
        console.log(error)
      
      }

    }

    return (
      <>
          <p></p>
          <p>ContactUs page/component 1.0.7</p>
          <p>
            <div id="output" className="output" ref={outputDiv}></div>
          </p>
          <div>
            <form>
              <label>* Name: </label><input ref={txtname} type="text" maxLength={20}></input><br></br>
              <label>* Email: </label><input ref={txtemail} type="text"  maxLength={30}></input><br></br>
              <label> Phone: </label><input type="text"  maxLength={15}></input><br></br>
              <label>* Comment: </label><br></br>
              <textarea rows={5} cols={30}></textarea><p></p>
              <button onClick={btnHandleFormValidation}>Submit</button>
            </form>
          </div>
      </>
    );
}
  
export default ContactUs;

