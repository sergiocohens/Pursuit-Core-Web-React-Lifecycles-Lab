import React from 'react'
import TodoItem from './TodoItem'

const TodosList = (props) => {
  const todosList = props.todos.map(todoItem => {
    return (
      <TodoItem
        text={todoItem.text}
        id={todoItem.id}
        handleDelete={props.handleDelete}
        notify={props.notify}
      />
    )
  })
  return (
    <ul>
    {todosList}
    </ul>
  )
}

export default TodosList
