import React from "react";
import { useContext } from "react";
import { TodoContext } from "../context/indexContext";
import { ReactComponent as Search } from "../assets/search.svg";
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
            {/* <div className="body__searchField--button" type="submit" value="">
            <Search width={85} height={85}/>
            </div>  */}
        </div>
        
    );
}

export { TodoSearch };
