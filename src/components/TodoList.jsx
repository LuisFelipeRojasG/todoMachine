import React from "react";
import { TodoContext } from '../context/indexContext';
import { TodoItem } from "./TodoItem";
import '../styles/todoList.css';

function TodoList () {

    const {searchedTodos, completeTodo, deleteTodo } = React.useContext(TodoContext);

    return (
        <div className="todoContainer">
            {searchedTodos.map(todo => (
                <TodoItem
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    description={todo.description}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                />        
            ))}
        </div>
    );
}

export { TodoList };