import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../context/indexContext';

function App() {
    return (
       <TodoProvider>
            <AppUI />
       </TodoProvider>
    );
}

export { App };