import React from "react";
import { TodoContext } from "../context/indexContext";
import { useContext } from "react";

function TodoCounter() {

    const { completedTodos, totalTodos, } = useContext(TodoContext);

    return (
        <h1>
            Has completado {completedTodos} de {totalTodos} TODOs
        </h1>
    );
}


export { TodoCounter };