import React from "react";
import { useContext } from "react";
import { TodoContext } from "../context/indexContext";
import '../styles/todoSearch.css';

function TodoSearch () {
    
    const {searchTodo, setSearchTodo} = useContext(TodoContext);
    
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchTodo(event.target.value);
      };

    return (
        <div className="body__searchField">
            <input 
                className="body__searchField--field" 
                type="search" 
                placeholder="Buscar ToDos"
                value={searchTodo}
                onChange={onSearchValueChange}
            />
        </div>
        
    );
}

export { TodoSearch };
