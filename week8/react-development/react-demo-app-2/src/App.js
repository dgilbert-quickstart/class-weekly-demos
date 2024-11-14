import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home";
import About from "./components/About"
import ContactUs from "./components/ContactUs"

function App() {
  return (
    <BrowserRouter>
      <Routes>                        
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
