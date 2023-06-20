import React from 'react';
//import { useState } from 'react';
import './AppUI.css';
import { TodoAccess } from '../components/TodoAccess';
import { TodoPrincipal } from '../components/TodoPrincipal';
//import { TodoCreate } from '../components/TodoCreate';
import { TodoModal } from '../components/TodoModal';



function AppUI() {

  return (
    <>
      <main className='mainContainer'>
        <TodoAccess />
        <TodoPrincipal />
        {/* <TodoCreate /> */}
        <TodoModal>
          
        </TodoModal>
      </main>
    </>
  );
}

export { AppUI };
