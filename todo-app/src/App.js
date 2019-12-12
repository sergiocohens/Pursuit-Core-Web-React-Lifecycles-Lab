import React from 'react';
import logo from './logo.svg';
import './App.css'
import Form from './Components/Form'
import TodosList from './Components/TodosList'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      todoText: ''
    }
    this.currentTodoId = 0
  }

  handleChange = (event) => {
    this.setState({
      todoText: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('form')
    const { todos, todoText } = this.state
    let newTodos = todos
    newTodos.push({
      id :this.currentTodoId,
      text: todoText
    })
    this.currentTodoId++
    this.setState({
      todos: newTodos
    })
  }

  notify = (el) => toast(el)

  handleDelete = (event) => {
    const { todos } = this.state
    const id = event.target.id
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === parseInt(id)) {
        todos.splice(i)
      }
    }
    this.setState({
      todos: todos
    })
  }

  render() {
    const { todos, todoText } = this.state
    return (
      <div className="App">
        <Form handleSubmit={this.handleSubmit} handleChange={this.handleChange} todoText={todoText}/>
        <TodosList todos={todos} handleDelete={this.handleDelete} notify={this.notify}/>
        <ToastContainer/>
      </div>
    )
  }
}

export default App;
