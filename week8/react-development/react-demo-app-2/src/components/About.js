import { Link } from "react-router-dom";

function About() {
    return (
      <>
          <nav>
            <Link to="/">Home</Link> {" | "}
            <Link to="/about">About</Link>
          </nav>
          <p></p>
          <p>About page/component</p>
      </>
    );
}
  
export default About;

