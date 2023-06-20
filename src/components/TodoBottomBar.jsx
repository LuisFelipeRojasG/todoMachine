import React from 'react';
import '../styles/todoBottonBar.css';
import { ReactComponent as Crear } from '../assets/crear.svg';
import { TodoContext } from '../context/indexContext';

function TodoBottonBar () {
    
    const { setOpenTodoModal } = React.useContext(TodoContext);

    const changeView = () => {
        setOpenTodoModal('block');
    }
    
    return(
        <>
            <div className="todoBottonBar">
                <Crear 
                    className='todoBotton' 
                    onClick={ changeView }
                />
                <div className='todoBotton--bar'></div>
            </div>
        </>
    );

}

export { TodoBottonBar };