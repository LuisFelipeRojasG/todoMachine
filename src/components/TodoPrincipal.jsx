import React from "react";
import { TodoHeader } from "./TodoHeader";
import { TodoLogo } from "./TodoLogo";
import { TodoBottonBar } from "./TodoBottomBar";
import { TodoContext } from '../context/indexContext';
import '../styles/todoPrincipal.css';
import { TodoCounter } from "./TodoCounter";
import { TodoList } from "./TodoList";

function TodoPrincipal () {

    const {viewPrincipal} = React.useContext(TodoContext);
    
    return (
        <div className="todoPrincipal" style={{display: viewPrincipal}}>
            <TodoHeader 
                fondo="black"
            />
            <span className="todoPrincipalLogo">
                <TodoLogo 
                    width={80}
                    height={80}
                />   
            </span>
            <div className="todoPrincipal__body">
                <div className="body__controls">
                    <TodoCounter />
                </div>
                <div className="body__itemHeader">
                    <button typeof="checked"></button>
                    <p>Task</p>
                </div>
                <div className="listOfTodos"> 
                    <TodoList />
                </div>
            </div>
            <TodoBottonBar />
        </div>
    );
}

export { TodoPrincipal };