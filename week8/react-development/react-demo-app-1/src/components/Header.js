//react re-usable component - can be in a seperate file , ie: export, import
//property or props including default ie: html/attribute
export default function Header({title="default title"}) {
    //useState, useEffect, useRef, poperties/props/data, event, other 
    return (
      <>
        <h1>{title}</h1>
      </>
    )
}
