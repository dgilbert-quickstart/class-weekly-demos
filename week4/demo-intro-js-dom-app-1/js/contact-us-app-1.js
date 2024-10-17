function page_load()
{
    const msg = "## contact-us - page load";
    console.log(msg)
}

function form_submit()
{
    let msg = "## contact-us - form_submit";
    console.log(msg)

    const _outputDev = document.getElementById("output");

    if(_outputDev == null | _outputDev == undefined)
    {
        msg = "## output div not found."
        console.log(msg);
        return false;
    }

    _outputDev.innerText = msg;

}

function form_reset()
{
    let msg = "## contact-us - form-rest";
    console.log(msg)
}

