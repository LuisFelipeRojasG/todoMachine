import React, { useContext } from 'react';
import { TodoLogo } from './TodoLogo';
import close from '../assets/icon_X.png';
import '../styles/todoCreate.css';
import { TodoContext } from '../context/indexContext';

function TodoCreate () {

    const {
      addTodo,
      setOpenTodoModal,
      newTitleValue,
      newDescripValue,
      setNewTitleValue,
      setNewDescripValue
    } = useContext(TodoContext);

    const closeModal = () => {
        setOpenTodoModal('none')
    }

    const onChangeTitle = (event) => {
        setNewTitleValue(event.target.value);
    }

    const onChangeDescrip = (event) => {
        setNewDescripValue(event.target.value);
    }

    const onSubmit = (event) => {
      //para evitar recargar la página
      event.preventDefault();
      
      addTodo(newTitleValue, newDescripValue);
      
      setNewTitleValue('');
      setNewDescripValue('');
      const cleanTitle = document.getElementById('container__form--title');
      const cleanDescription = document.getElementById('container__form--description');
      cleanTitle.value = '';
      cleanDescription.value = '';
      setOpenTodoModal('none');
    };


    return (
      <div className="todoCreate">
        <div className="todoCreate__navBar">
          <h1>ADD TASK</h1>
          <img src={close} alt="Close" onClick={closeModal} />
        </div>
        <div className="todoCreate__container">
          <span className="container__logo">
            <TodoLogo />
          </span>
          <form className="container__form" onSubmit={onSubmit}>
            <label htmlFor="container__form--title">Title</label>
            <input
              type="text"
              onChange={onChangeTitle}
              id="container__form--title"
              placeholder="Enter task title"
            />
            <label htmlFor="container__form--description">Description</label>
            <input
              type="text"
              onChange={onChangeDescrip}
              id="container__form--description"
              placeholder="Enter task description"
            />
            <div className="container__buttons">
              <button 
                type="submit" 
                className="button buttons--blue"
              >
                Add
              </button>
              <button
                type="button"
                className="button buttons--red"
                onClick={closeModal}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
}

export { TodoCreate };