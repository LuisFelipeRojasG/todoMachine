import React from "react";
import { useContext } from "react";
import { TodoContext } from "../context/indexContext";
import { ReactComponent as Search } from "../assets/search.svg";

function TodoSearch ({ width, height, display }) {
    
    const {} = useContext(TodoContext);
    
    return (
        <Search width={width} height={height} display={display}/>
    );
}

export { TodoSearch };
