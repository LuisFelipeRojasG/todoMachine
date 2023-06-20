import React from "react";
import { createPortal } from "react-dom";
import { TodoCreate } from '../components/TodoCreate';
import { TodoContext } from "../context/indexContext";
import '../styles/todoModal.css';

function TodoModal () {

    const { openTodoModal } = React.useContext(TodoContext);

    return createPortal (
        <div className="modalView" style={{display: openTodoModal}}>
            <TodoCreate />
        </div>,
        document.getElementById('modal')
    );

}

export { TodoModal };
