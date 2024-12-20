/*
App.js 
*/
/*

-- jsx sometimes parses javascript comment 

//react componeent/webpage or html snipit 
//ie: app.html , page1.html - exctpt -- html-head->body
//jsx - modified version of html ie: <div class = <div className
//
//react component/page design = root element 
// example: <div>...</div>
// erorr if 2 root elements ie: <div>...</div><div>...</div>
// or react root element <></>
//## not reccomended to use: document.getElementById("").addEventListener("click")
// - react uses jsx and generates a modified DOM tree 
//- {} - combine jax/html with javascript code 
*/

//functional programming - function with functions, closures 

import {useRef, useEffect, useState} from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {

  //React Hooks - react library functions used to update react/dom or implement dom/events 
  //useRef = references an html/element. can update ref/element in react code 
  //const outputDiv = document.getElementById("ouput")
  const outputDiv = useRef("")

  //useState - create in-memory data in react functional page/component 
  //-- array destructoring - es5+ - useState function return 2 variable 1. data 2. function to update the data 
  //-- useState data is save and refreshed when the page is updated 
  //-- react will keep track of when usestate date, when ui refresh react will save and restore useSate data 
  //-- reccomended: most of the time you can use useState instead of useRef
  //-- useState is more effieient that useRef is most cases 
  const [msg, setMsg] = useState("")

  //useEffect - page/component (1.) load-1 time, (2.) ui/update/refresh, (3.) unload, 
  // (4.) 1 or more state/variable is update
  //- create multiple useEffect in a function 
  //- best practices: avoid recursive useEffect calls 
  //  - ie: unless loop / recursive/ out of memory error useEffect calls

  //- (1.) ui/page/compnent load 
  //-- reccomended in certain conditions 
  useEffect(()=>{

    const _msg = "## on ui page/component load - 1 time";
    console.log(_msg)
    outputDiv.current.innerText = _msg;
        
    //-not-reccomended to update state inside a useEffect - can can recursive-endless loop 
    //- also state variable could be tracked or referenced by other useEffect

    //-- update useState 
    setMsg(_msg)

  },[])

  //- (2.) ui/page/compnent is refreshed/updated 
  //-- reccomended in certain conditions 
  useEffect(()=>{

    const _msg = "## on ui page/component refesh/update";
    console.log(_msg)
  
    //-- useEffect can be call recursivly on ui/update/refresh 
    //- best practices: avoid recursive useEffect calls 
    //  - ie: unless loop / recursive/ out of memory error useEffect calls

  })
  
  //function within function - es5+ arrow function 
  const btnEx1 = () => {
    
    const _msg = "## btn example 1"
    alert(_msg)
    console.log(_msg)
    
    //-- update useState 
    setMsg(_msg)

  }

  const btnUseRefEx1 = () => {
    
    const _msg = "## btn useRef example 1"
  
    //update output div 
    //outputDiv.innerText = msg 
    outputDiv.current.innerText = _msg
  
    //-- update useState 
    setMsg(_msg)

  }

  
  const btnUseStateEx1 = () => {
    
    const _msg = "## btn useState example 1"
    //setMsg(()=>_msg)
    setMsg(_msg)
  
  }

  return (
    <>
      <div>
          <Header title="Demo React App 1.1.4"/>
          <p>{msg}</p>
          <div id="output" className="output" ref={outputDiv}>            
          </div>
          <p></p>
          <div>
            <button onClick={btnEx1}>btn ex1</button>
            <span> </span>
            <button onClick={()=>alert("## btn example 2")}>btn ex2</button>
            {" "}
            <button onClick={btnUseRefEx1}>useRef ex1</button>
            {" "}
            <button onClick={btnUseStateEx1}>btn useState ex1</button>
          </div> 
          <p></p>
          <Footer title="footer @ 2024"/>
      </div>
    </>
  );
}

export default App;
