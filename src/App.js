import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/layout/Header'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import About from './components/pages/About'
import React, {Component} from 'react'
// import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({todos: res.data}))
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
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res =>
      this.setState({todos: [...this.state.todos.filter(todo => 
        todo.id !== id)]})
         )
    
  }

  // Add todo
  addTodo = (title) => {
    console.log("title added",title)
    axios.post('https://jsonplaceholder.typicode.com/todos',{
      title: title,
      completed: false
    }).then(res => this.setState({todos: [...this.state.todos, res.data]})
    )
  }

  render(){
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header/>
            <Route exact path='/' render={props =>(
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} markComplete={this.markComplete} 
                deleteItem={this.deleteItem}/>
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
