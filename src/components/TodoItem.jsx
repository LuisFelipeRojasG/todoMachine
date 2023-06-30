import React from "react";
import '../styles/todoItem.css'

function TodoItem ({text, completed, description}) {
    return (
        <div className="todoItem">
            <div className="todoItem--button">
                <button typeof="checked"></button>
            </div>
            <div className="todoItem--text">
                <p className={`todoItem--title`}>
                    {text}
                </p>
                <p className={`todoItem--description`}>
                    {description}
                </p>
            </div>
        </div>
    );
}

export { TodoItem };