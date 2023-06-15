import "./css/App.css";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoCreateButton } from "./components/TodoCreateButton";
import { TodoItems } from "./components/TodoItems";
import { useState } from "react";
import { useLocalStorage } from "./components/useLocalStorage";
import { TodosLoading } from './components/TodosLoading';

function App() {
    const {
        item: todos,
        saveItem,
        loading,
        error,
    } = useLocalStorage("Todo_v1", []);
    const [searchValue, setSearchValue] = useState("");
    const total = todos.length;
    const completed = todos.filter((item) => item.completed === true).length;

    const filter = todos.filter((item) =>
        item.name.toLowerCase().includes(searchValue)
    );

    const completeTodos = (text) => {
        const newTodos = [...todos];
        const index = newTodos.findIndex((todo) => todo.name === text);
        newTodos[index].completed = !newTodos[index].completed;
        saveItem(newTodos);
    };

    const deleteTodos = (text) => {
        const newTodos = [...todos];
        const index = newTodos.findIndex((todo) => todo.name === text);
        newTodos.splice(index, 1);
        saveItem(newTodos);
    };

    const newTodo = () => {
        const newTODOS = [...todos];
        if (searchValue === "") return alert("No puedes crear un TODO vacio");
        else {
            newTODOS.push({ name: searchValue, completed: false });
            saveItem(newTODOS);
            setSearchValue("");
        }
    };

    return (
        <>
            <TodoCounter total={total} completed={completed} todos={todos} />
            <TodoCreateButton newTodo={() => newTodo()} />
            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />

      <TodoList>
        {loading && <TodosLoading />}
        {error && <p>Hubo un error</p>}
        {!loading && !filter.length && <p>Crea tu primer TODO</p  >}
                {filter.map((item) => (
                    <TodoItems
                        key={item.name}
                        name={item.name}
                        completed={item.completed}
                        onCompleted={() => completeTodos(item.name)}
                        onDelete={() => deleteTodos(item.name)}
                    />
                ))}
            </TodoList>
        </>
    );
}

export default App;

//TODO:
// Corregir el tamaño del boton y la barra de busqueda
