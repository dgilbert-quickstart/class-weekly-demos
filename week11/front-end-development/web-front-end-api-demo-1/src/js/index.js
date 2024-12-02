//index.js 

const outputDiv = document.getElementById("output")

document.getElementById("btn-call-api-demo-1").addEventListener("click", (e)=>{

    let _msg = "# btn-call-api-demo-1"

    try {
        
        console.log(_msg)
        outputDiv.innerText = _msg;

    } catch (error) {
        _msg = "#btn-call-api-demo-1::error"
        
        outputDiv.innerText = _msg;

        console.log(_msg)
        console.log(error)
    }
})
