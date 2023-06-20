import React from 'react';
//import { useLocalStorage } from './useLocalStorage';
import { useState } from 'react';

const TodoContext = React.createContext();

function TodoProvider ({children}) {

    const [viewPrincipal, setViewPrincipal] = useState('none');
    // const [viewCreate, setViewCreate] = useState('none');
    const [openTodoModal, setOpenTodoModal] = useState('none');

    return(
        <TodoContext.Provider value={{
            viewPrincipal,
            setViewPrincipal,
            // viewCreate, 
            // setViewCreate,
            openTodoModal,
            setOpenTodoModal,
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoProvider, TodoContext };