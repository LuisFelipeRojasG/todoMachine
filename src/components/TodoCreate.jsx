import React from 'react';
import { TodoLogo } from './TodoLogo';
import logo from '../assets/icon_X.png';
import '../styles/TodoCreate.css'

function TodoCreate () {

    return(
        <div className='todoCreate' >
            <div className="todoCreate__navBar">
                <h1>ADD TASK</h1>
                <img src={logo} alt="Close" />
            </div>
            <div className='todoCreate__container'>
                <span className='container__logo'>
                    <TodoLogo />
                </span>
                <form className='container__form'>
                    <label htmlFor='container__form--title'>Title</label>
                    <input type="text" id="container__form--title" placeholder="Enter task title"/>
                    {/* <label htmlFor='container__form--description'>Description</label>
                    <input type="text" id="container__form--description" placeholder="Enter task description"/>
                    <label htmlFor='container__form--date'>Date end</label>
                    <input type="text" id="container__form--date" placeholder="Click here to choose date"/> */}
                </form>
                <div className='container__buttons'>
                    <button className='button buttons--blue'>Add</button>
                    <button className='button buttons--red'>Cancel</button>
                </div>
            </div>
        </div>
    );
}

export { TodoCreate };