function ContactUs() {
    return (
      <>
          <p></p>
          <p>ContactUs page/component 1.0.1</p>
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
              <button>Submit</button>
            </form>
          </div>
      </>
    );
}
  
export default ContactUs;

