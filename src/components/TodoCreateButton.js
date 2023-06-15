import "../css/TodoCreateButton.css"

function TodoCreateButton({newTodo}){

    

    return(
        <button className="button" onClick={newTodo}>
            <span className="img-btn"><img src={require("../icons/plus-circular-button.png")} alt="check"></img></span>
            Crear nuevo TODO</button>
    )
}

export {TodoCreateButton}