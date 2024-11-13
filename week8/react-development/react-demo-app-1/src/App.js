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

import {useRef, useEffect} from "react"

function App() {

  //React Hooks - react library functions used to update react/dom or implement dom/events 
  //useRef = references an html/element. can update ref/element in react code 
  //const outputDiv = document.getElementById("ouput")
  const outputDiv = useRef("")

  //useEffect - page/component (1.) load-1 time, (2.) ui/update/refresh, (3.) unload, 
  // (4.) 1 or more state/variable is update
  //- create multiple useEffect in a function 
  //- best practices: avoid recursive useEffect calls 
  //  - ie: unless loop / recursive/ out of memory error useEffect calls

  //- (1.) ui/page/compnent load 
  //-- reccomended in certain conditions 
  useEffect(()=>{

    const msg = "## on ui page/component load - 1 time";
    console.log(msg)
    
  },[])

  //- (2.) ui/page/compnent is refreshed/updated 
  //-- reccomended in certain conditions 
  useEffect(()=>{

    const msg = "## on ui page/component refesh/update";
    console.log(msg)
  
    //-- useEffect can be call recursivly on ui/update/refresh 
    //- best practices: avoid recursive useEffect calls 
    //  - ie: unless loop / recursive/ out of memory error useEffect calls

  })
  
  //function within function - es5+ arrow function 
  const btnEx1 = () => {
    
    const msg = "## btn example 1"
    alert(msg)
    console.log(msg)

  }

  const btnEx3 = () => {
    
    const msg = "## btn example 3"
  
    //update output div 
    //outputDiv.innerText = msg 
    outputDiv.current.innerText = msg

  }

  return (
    <>
      <div>
          <p>
            React demo app 1.0.7
          </p>
          <div id="output" className="output" ref={outputDiv}>
          </div>
          <p></p>
          <div>
            <button onClick={btnEx1}>btn ex1</button>
            <span> </span>
            <button onClick={()=>alert("## btn example 2")}>btn ex2</button>
            {" "}
            <button onClick={btnEx3}>btn ex3</button>
          </div> 
      </div>
    </>
  );
}

export default App;
