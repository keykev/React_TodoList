import React from 'react';
import PropTypes from 'prop-types'

class TodoItem extends React.Component{

   getStyle() {
        return { 
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    // button style with background #ff0000, color #fff, with no border, with 5 px padding top-down and 10 left-right, 50% border raidus,
    //with cursor pointer, and push to the right
    btnStyle(){
        return{
        background: '#ff0000',
        color: '#fff',
        border: 'none',
        padding:'5px 9px',
        borderRadius: '50%',
        cursor: 'pointer',
        float: 'right'
        }
    }
  
    render(){
        //I want a quick access to title using props
        const {title} = this.props.todo
        return(
            <div style = {this.getStyle()}>
               
                <p>
                    {/*I want to check and uncheck and when changed will call prop markComplete and will return element id */}
                    <input type ="checkbox" onChange = {this.props.markComplete.bind(this,this.props.todo.id)} />
                    {title} 
                    {/*button element, onclick should delete by calling prop delTodo along with bring back element id 
                    should also return button style.*/ }
                    <button onClick = {this.props.delTodo.bind(this, this.props.todo.id)} style = {this.btnStyle()}>x</button>
                </p>
            </div> 
        )
    }

}


//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}
export default TodoItem