import React from 'react';
import './TodoItem.css';
import { Checkbox } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { setCheck, removeItem } from '../features/todoSlice'



export default function TodoItem({ name, id, done }) {

  const dispatch = useDispatch()

  const handleChange = () => {
    dispatch(setCheck(id))
  }
  const deleteHandle = () => {
    dispatch(removeItem(id))
  }

  return (
    <div className='todo-item'>
      <Checkbox
        checked={done}
        color="primary"
        onChange={handleChange}
        inputProps={{ 'aria-label': 'seconday checkbox' }}
      />
      <p className={done ? 'todo-item--done' : ''}>{name}</p>
      <button type='button' onClick={deleteHandle}>Delete</button>
    </div>
  )
}
