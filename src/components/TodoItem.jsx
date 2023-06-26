import React from "react";
import '../styles/todoItem.css'

function TodoItem ({text, completed, description}) {
    return (
        <>
            <li className="todoItem">
                <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
                    {text}
                </p>
                <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
                    {description}
                </p>
                <span  className="Icon Icon-delete" onClick={{/*onDelete*/}}>
                    x
                </span>
            </li>
        </>
    );
}

export { TodoItem };