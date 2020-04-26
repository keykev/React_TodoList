import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About'
import { v4 as uuidv4 } from 'uuid';
class App extends React.Component{
  
  state = {
    todos: [
      { 
        id: uuidv4(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuidv4(), // id use for backend 
        title: 'Dinner with girlfriend',
        completed: false
      },
      {
        id: uuidv4(), // id use for backend 
        title: 'Meeting with boss',
        completed: false
      }
    ]
  }

  //mark complete: markComplete method that takes in id and changes state if item's id matches with markComplete's id. 
  //Returns item
 markComplete(id) {
   this.setState({
     todos: this.state.todos.map(item =>{
       if(item.id === id){
         item.completed = !item.completed
       }
       return item
     })
   })
 }
  //delete: change the todos state and filter out items that doesnt match ids.
  delTodo(id) {
      this.setState({
        todos: this.state.todos.filter(item => item.id !== id)
      })
  }
  //add todos: set a const object with properties id title and completed then change state of todos to incldue this new todo.
  addTodo(title){
    const newAddtodo = {
      id: uuidv4(),
      title,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newAddtodo]
    })
  }
  render(){
  return (
    <Router> 
    <div className="App">
      <div className='container'>
       <Header />
       {/* route the main application with '/' and render in route with props.  */}
       <Route exact path = '/' render = {props => (
         <React.Fragment>
           <AddTodo addTodo = {this.addTodo.bind(this)} />
           <Todos todos = {this.state.todos} markComplete = {this.markComplete.bind(this)} 
            delTodo = {this.delTodo.bind(this)} />
         </React.Fragment>
       )}/>
       {/*Route about */}
       <Route path = '/about' component = {About} />
      </div>
    </div>
    </Router>
  );
}
}
export default App;
