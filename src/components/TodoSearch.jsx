import React from "react";
import { useContext } from "react";
import { TodoContext } from "../context/indexContext";


function TodoSearch () {
    
    const {} = useContext(TodoContext);
    
    return (
        <input type="text" />
    );
}

export { TodoSearch };