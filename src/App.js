import './App.css';
import Header from './components/layout/Header'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import react, {Component} from 'react'
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "Learn react",
        completed: false
      },
      {
        id: uuidv4(),
        title: "Make todo app",
        completed: false
      },
      {
        id: uuidv4(),
        title: "Teach",
        completed: false
      }
    ]
  }
  //Toggle complete a item
  markComplete = (id) => {
    console.log("from App.js",id)
    this.setState({todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })
  })
  }

  // delete todo item
  deleteItem = (id) => {
    console.log("delete id",id)
    this.setState({todos: [...this.state.todos.filter(todo => 
      todo.id !== id)]})
  }

  // Add todo
  addTodo = (title) => {
    console.log("title added",title)
    const newTodo ={
      id: uuidv4(),
      title: title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]})
  }

  render(){
    return (
      <div className="App">
        <div className="container">
          <Header/>
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} markComplete={this.markComplete} 
               deleteItem={this.deleteItem}/>
        </div>
      </div>
    );
  }
}

export default App;
