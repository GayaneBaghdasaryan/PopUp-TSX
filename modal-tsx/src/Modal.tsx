
import './modal.css'
 
interface Props {
  setClose : (params:boolean)=>void
}

export const Modal = ({setClose}:Props) => {
   return(
    <>
  
    <div className='modal-wrapper'>
    <div className="modal">
        <div className="modal-button">
            <button onClick={()=>setClose(false)}>X</button>
        </div>
        <div className="head">
          <h1>Edit here</h1>  
        </div>
    </div>         
    </div>       
    
   
    </>


   )
}