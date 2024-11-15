import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About"
import ContactUs from "./components/ContactUs"
import ContactUs2 from "./components/ContactUs2";

function App() {
  return (    
    <BrowserRouter>            
      <NavBar/>  
      <Routes>       
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/contact2" element={<ContactUs2/>}/>
        <Route path="/about" element={<About/>}/>      
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
