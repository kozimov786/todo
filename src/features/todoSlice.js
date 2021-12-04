import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todoList: []
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    saveToDo(state, actions) {
      state.todoList.push(actions.payload)
    },
    setCheck(state, actions) {
      state.todoList.map(item => {
        if (actions.payload === item.id) {
          if (item.done === true) {
            item.done = false
          } else {
            item.done = true
          }
        }
      })
    }
  }
});

export const { saveToDo, setCheck, removeItem } = todoSlice.actions

export const selectedTodos = state => state.todo.todoList

export default todoSlice.reducer