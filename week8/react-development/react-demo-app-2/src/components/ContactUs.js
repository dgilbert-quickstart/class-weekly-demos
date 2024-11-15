function ContactUs() {

    //react includes event object as first parameter 
    function btnHandleFormValidation(event)
    {
      event.preventDefault();

      try {
        
        const _msg = "## btnHandleFormValidation"
        alert(_msg)
        console.log(_msg)

      } catch (error) {        
        const _msg = "## btnHandleFormValidation::Error"
        alert(_msg)
        console.log(_msg)
        console.log(error)
      
      }

    }

    return (
      <>
          <p></p>
          <p>ContactUs page/component 1.0.2</p>
          <p>
            <div id="output" className="output"></div>
          </p>
          <div>
            <form>
              <label>* Name: </label><input maxLength={20}></input><br></br>
              <label>* Email: </label><input  maxLength={30}></input><br></br>
              <label> Phone: </label><input  maxLength={15}></input><br></br>
              <label>* Comment: </label><br></br>
              <textarea rows={5} cols={30}></textarea><p></p>
              <button onClick={btnHandleFormValidation}>Submit</button>
            </form>
          </div>
      </>
    );
}
  
export default ContactUs;

