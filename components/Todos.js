import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends React.Component{
    
  render() {
  
    // i want to return todos into objects with its own key, along with the props todo markcomplete, and deltodo
 return this.props.todos.map(item =>
  <TodoItem key = {item.id} todo = {item} markComplete = {this.props.markComplete} delTodo = {this.props.delTodo} />)
}

}

 // Prop Types 
Todos.propTypes ={
    todos: PropTypes.array.isRequired
};
export default Todos;
