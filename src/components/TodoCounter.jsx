import React from "react";
import { TodoContext } from "../context/indexContext";
import { useContext } from "react";
import '../styles/todoCounter.css';

function TodoCounter() {

    const { completedTodos, totalTodos, } = useContext(TodoContext);

    return (
        <div className="todoCounter">
            <div className="todoCounter__option">
                <p>Todos</p>
                <p>{totalTodos}</p>
            </div>
            <div className="todoCounter__option">
                <p>Done</p>
                <p>{completedTodos}</p>
            </div>
        </div>
        
    );
}


export { TodoCounter };