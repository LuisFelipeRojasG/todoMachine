import React from "react";
import { TodoLogo } from "./TodoLogo";
import { TodoBottonBar } from "./TodoBottomBar";
import { TodoContext } from '../context/indexContext';
import '../styles/todoPrincipal.css';
import { TodoCounter } from "./TodoCounter";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";


function TodoPrincipal () {

    const {viewPrincipal} = React.useContext(TodoContext);
    
    return (
        <div className="todoPrincipal" style={{display: viewPrincipal}}>
            <header className="todoPrincipal__header">
                <div className="header"></div>
                <div className="todoPrincipal__header--controls">
                    <TodoLogo 
                        width={80}
                        height={80}
                    />
                    <div className="header--controls">
                        <TodoCounter />
                    </div>
                    <TodoSearch />
                </div>
            </header>
            <div className="todoPrincipal__body">
                <div className="listOfTodos"> 
                    <TodoList />
                </div>
            </div>
            <TodoBottonBar />
        </div>
    );
}

export { TodoPrincipal };