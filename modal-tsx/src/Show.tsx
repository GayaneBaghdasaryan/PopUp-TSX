import { useState } from "react"
import { Modal } from "./Modal";
import './show.css'

export const Show = () => {
   const [show, setShow] = useState(false);
  return(
    <div className="show">
        <div className="show-button">
            <button className="setShow" onClick={()=>setShow(!show)}>Show Edit</button>   
             {show && <Modal setClose={setShow}/>}        
        </div>

    </div>
  )
}

