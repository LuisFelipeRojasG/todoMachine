import React from "react";
import { TodoHeader } from "./TodoHeader";
import { TodoLogo } from "./TodoLogo";
import { TodoBottonBar } from "./TodoBottomBar";
import { TodoContext } from '../context/indexContext';
import '../styles/todoPrincipal.css';
import { TodoCounter } from "./TodoCounter";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";

const deleteAll = () => {
    console.log("Quieres eliminar la lista de Todos");
}


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
                <div className="body__searchField">
                    <input className="body__searchField--field" type="search" name="" id="" />
                    <div className="body__searchField--button" type="submit" value="">
                        <TodoSearch 
                            width={25}
                            height={25}
                            display={'center'}
                        />   
                    </div> 
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