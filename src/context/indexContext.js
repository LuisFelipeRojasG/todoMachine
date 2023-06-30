import React from 'react';
//import { useLocalStorage } from './useLocalStorage';
import { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const TodoContext = React.createContext();

// const defaultTodos = [
//     { text: 'Cortar cebolla', completed:true },
//     { text: 'Tomar el cursso de intro a React', completed:false },
//     { text: 'Llorar con la llorona', completed:true },
//     { text: 'LALALALAA', completed:false },
// ];



function TodoProvider ({children}) {

    const [viewPrincipal, setViewPrincipal] = useState('none');
    const [openTodoModal, setOpenTodoModal] = useState('none');
    //const [todos, setTodos] = useState(defaultTodos);
    //const [searchTodo, setSearchTodo] = useState('');
    const [searchValue, setSearchValue] = useState('');

    const [todos, saveTodos] = useLocalStorage('Todos_v1', []);

    // Cantidad de TODOs completados
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    // Cantidad total de TODOs
    const totalTodos = todos.length;
    // Variable para guardar las coincidencias de la busqueda
    let searchedTodos = [];

    // Lógica para filtrar
    if (!searchValue.length >= 1) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter(todo => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        });
    }

    const addTodo = (text, description) => {
        const newTodos = [...todos];
        newTodos.push({
            completed:false,
            text,
            description,
        });
        saveTodos(newTodos);
    }

    const completeTodo = (text) => {
		const todoIndex = todos.findIndex(todo => todo.text === text);
		const newTodos = [...todos];
	    newTodos[todoIndex].completed = true;
	    saveTodos(newTodos);
    };

    const deleteTodo = (text) => {
		const todoIndex = todos.findIndex(todo => todo.text === text);
		const newTodos = [...todos];
	    newTodos.splice(todoIndex, 1);
	    saveTodos(newTodos);
    };

    return(
        <TodoContext.Provider value={{
            viewPrincipal,
            setViewPrincipal,
            openTodoModal,
            setOpenTodoModal,
            todos, 
            //setTodos,
            completedTodos,
            totalTodos,
            //searchTodo, 
            //setSearchTodo,
            searchedTodos,
            completeTodo,
            deleteTodo,
            addTodo,
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoProvider, TodoContext };