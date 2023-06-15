import "../css/TodoSearch.css"

function TodoSearch(
    {searchValue,setSearchValue}) {

    const handle = (event) => {
        setSearchValue(event.target.value)
    }



    return (
        <input  onChange={handle} value={searchValue} className="search" placeholder="Buscar Todo o Añadir Todo" />
    )
}

export {TodoSearch}
