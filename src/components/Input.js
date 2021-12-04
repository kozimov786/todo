import React, { useState } from 'react';
import './Input.css';
import { useDispatch } from 'react-redux';
import { saveToDo } from '../features/todoSlice';

export default function Input() {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const onTodo = () => {
    dispatch(saveToDo({
      item: input,
      done: false,
      id: Date.now()
    }))
    setInput('')
  }
  return (
    <div className='input-wrapper'>
      <input type="text" value={input} onChange={e => setInput(e.target.value)} />
      <button type='submit' onClick={onTodo}>ADD</button>
    </div>
  )
}
