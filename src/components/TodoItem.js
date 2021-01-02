import React, { Component } from 'react'
import PropType from 'prop-types'

export class TodoItem extends Component {
  getStyle = () => {
   return{
     background : "#f4f4f4",
     padding: '10px',
     borderBottom: '1px #cc dotted',
     textDecoration: this.props.todo.completed ? 
                     "line-through" : "none"
   }
  }


  render() {
    //deconstruct 
    const {id, title } = this.props.todo
    return (
      <div style={this.getStyle()}>
        <p>
        <input type="checkbox" onChange={this.props.markComplete.bind
        (this, id)}/> {' '}
        { title }
        <button onClick={this.props.deleteItem.bind(this,id)} style={deleteBtnStyle} type="button"> x </button>
        </p>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropType.object.isRequired
}

const deleteBtnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: 'none',
  padding: '5px 8px',
  borderRadius: '50%',
  float: 'right'
}

export default TodoItem
