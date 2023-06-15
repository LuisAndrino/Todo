import check from "../icons/check.png"
import remove from"../icons/remove.png"
import "../css/TodoItems.css"

function TodoItems({name, completed, onCompleted , onDelete}){
  
  
  


  return(
    <li className={`li ${completed === true ? "li-completed" : ""}`} >
        <span onClick={onCompleted} className="li-icons" ><img className="check" src={check} alt="check"></img></span>
        <p>{name}</p>
        <span onClick={onDelete} className="li-icons"><img className="delete" src={remove} alt="remove"/></span>
      </li>
       
    )
}

export {
    TodoItems
}