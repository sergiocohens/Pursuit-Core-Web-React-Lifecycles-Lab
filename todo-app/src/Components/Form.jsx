import React from 'react'

const Form = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input type='text' placeholder='Enter a Todo' onChange={props.handleChange}/>
    </form>
  )
}

export default Form
