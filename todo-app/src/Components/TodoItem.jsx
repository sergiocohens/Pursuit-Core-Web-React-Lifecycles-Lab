import React from 'react'

class TodoItem extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    let string = 'New todo created: ' + this.props.text
    this.props.notify(string)
  }

  componentWillUnmount() {
    let string = 'Todo deleted: ' + this.props.text
    this.props.notify(string)
  }

  render() {
    return (
    <>
    <p>{this.props.text + ' '}<button id={this.props.id} onClick={this.props.handleDelete}>delete</button></p>
    </>
  )
  }
}

export default TodoItem
