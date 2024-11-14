import { Link } from "react-router-dom";

function Home() {
    return (
      <> 
          <nav>
            <Link to="/">Home</Link> {" | "}
            <Link to="/about">About</Link>
          </nav>
          <p></p>
          <h1>React demo app 2.0.0</h1>        
      </>
    );
}
  
export default Home;

