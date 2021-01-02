import React, { Component } from 'react'
import PropType from 'prop-types'

export class AddTodo extends Component {

  state = {
    title: ''
  }

  titleOnchange = (e) => this.setState({
    title: e.target.value
  });

  submitTodo = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({title: ''})
  }

  render() {
    return (
      <form onSubmit={this.submitTodo} style = {{display: 'flex'}}>
        <input style={{flex: '10', padding: '5px'}} type='text'
              placeholder="Add Todo"
              name="title"
              value={this.state.title}
              onChange={this.titleOnchange}


               />
        <input type="submit" value="Submit"
                className='btn' style={{flex: '1'}}
        />
      </form>
    )
  }
}
AddTodo.propTypes = {
  addTodo: PropType.func.isRequired
}
export default AddTodo
