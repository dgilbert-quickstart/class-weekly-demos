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

/*
functional programming - function with functions, closures 
*/

function App() {

  /*
  function within function - es5+ arrow function 
  */
  const btnEx1 = () => {
    
    const msg = "## btn example 1"
    alert(msg)
    console.log(msg)

  }

  return (
    <>
      <div>
          <p>
            React demo app 1.0.2
          </p>
          <div id="output" className="output">
          </div>
          <div>
            <button onClick={btnEx1}>btn ex1</button>
            <span> </span>
            <button onClick={()=>alert("## btn example 2")}>btn ex2</button>
          </div> 
      </div>
    </>
  );
}

export default App;
