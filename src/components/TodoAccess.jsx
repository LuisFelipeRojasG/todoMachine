import React from 'react';
import { useState } from 'react';
import { TodoContext } from '../context/indexContext';
import { TodoLogo } from './TodoLogo';
import '../styles/todoAccess.css';


function TodoAccess () {

    const {setViewPrincipal} = React.useContext(TodoContext);

    const [viewAccess, setViewAccess] = useState('block');
    
    const changeView = () => {
        setViewAccess('none');
        setViewPrincipal('block');
    }

    return (
        <>
            <div className="appAccess" style={{display: viewAccess}}>
                <div className="appAccess__card">
                    <span className='appAccess__logo'>
                        <TodoLogo />
                    </span>
                    <h1>MAKE SUCCESSFUL YOUR DAY</h1>
                    <h3>Make small somethings to get big gift in your life</h3>
                    <button onClick={
                    changeView
                    }>Start</button>
                </div>
            </div>
        </>
    );
}

export { TodoAccess };