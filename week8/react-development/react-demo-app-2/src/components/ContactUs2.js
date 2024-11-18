function ContactUs2() {
    return (
      <>
          <p></p>
          <p>Contact Us 2 page/component</p>
          <p></p>
          <div className="output"></div>
          <p></p>
          <div>
            <form>
              <label>* Name: </label><input type="text" maxLength={20}></input><br></br>
              <label>* Email: </label><input  type="text"  maxLength={30}></input><br></br>
              <label> Phone: </label><input type="text"  maxLength={15}></input><br></br>
              <label>* Comment: </label><br></br>
              <textarea  rows={5} cols={30}></textarea><p></p>
              <button>Submit</button>
              {"   "}
              <button>reset</button>
            </form>
          </div>
      </>
    );
}
  
export default ContactUs2;


