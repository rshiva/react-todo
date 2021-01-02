import '../App.css';
import react, {Component} from 'react'
import TodoItem from "./TodoItem"
import PropType from 'prop-types'

class Todos extends Component {

  render(){
    return this.props.todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete}
                deleteItem={this.props.deleteItem}
      />
    ))
  }
}

//PropTypes are like type checking

Todos.propTypes = {
  todos: PropType.array.isRequired,
  markComplete: PropType.func.isRequired,
  deleteItem: PropType.func.isRequired
}
export default Todos;
