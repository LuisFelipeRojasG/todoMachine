import React from "react";
import { TodoContext } from '../context/indexContext';
import { TodoItem } from "./TodoItem";

function TodoList () {

    const {searchedTodos} = React.useContext(TodoContext);

    return (
        <div>
            {searchedTodos.map(todo => (
                <TodoItem
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    description={todo.description}
                />        
            ))}
        </div>
    );
}

export { TodoList };