import React from 'react';
//Logo
import todoLogo from '../../assets/todoLogo.svg';
//Styles
import styles from './header.module.css';
//Icon
import { AiOutlinePlusCircle } from 'react-icons/ai';
//Use State
import { useState } from 'react';

export function Header({ handleAddTask }) {
  const [title, setTitle] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    handleAddTask(title);
    setTitle('');
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={todoLogo} alt=''/>

      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input placeholder="Add a new task" type="text" onChange={onChangeTitle} value={title} />
        <button>Create List <AiOutlinePlusCircle size={20} /></button>
      </form>
    </header>
  )
}