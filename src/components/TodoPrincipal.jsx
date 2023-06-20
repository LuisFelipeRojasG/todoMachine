import React from "react";
import { TodoHeader } from "./TodoHeader";
import { TodoLogo } from "./TodoLogo";
import { TodoBottonBar } from "./TodoBottomBar";
import { TodoContext } from '../context/indexContext';
import '../styles/todoPrincipal.css';

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
                    <p>8 Todos completados de 15</p>
                </div>
                <div className="body__itemHeader">
                    <p>Task</p>
                </div>
                <div>Donde se muestran los todos que se crean</div>
            </div>
            <TodoBottonBar />
        </div>
        
    );

}

export { TodoPrincipal };