import React from 'react';
import './AppUI.css';
import { TodoAccess } from '../components/TodoAccess';
import { TodoPrincipal } from '../components/TodoPrincipal';
import { TodoModal } from '../components/TodoModal';

function AppUI() {

  return (
    <>
      <main className='mainContainer'>
        <TodoAccess />
        <TodoPrincipal />
        <TodoModal></TodoModal>
      </main>
    </>
  );
}

export { AppUI };
