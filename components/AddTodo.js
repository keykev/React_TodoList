import React from 'react';

class AddTodo extends React.Component{

state = {
    title: ''
}
//handle changes in text, takes in an event and changes the state of title.
handleChange(event) {
    this.setState({
        title: event.target.value
    })
}
/* handle changes when click on submit. Prevent refresh, add in 
a addTodo prop that takes in state title and change State to blank after submit.
*/
handleSubmit(event) {
    event.preventDefault();
    this.props.addTodo(this.state.title)
    this.setState({
        title: ''
    })
}

    render(){
        return(
            // in form, put in the handleSubmit method along with flex.
            <form onSubmit ={this.handleSubmit.bind(this)} style = {{display: 'flex'}} >
                 {/* input type with 'text', name with 'title', 
                 and style it with flex 10 with 5px padding
                 include a value that sets the text and allow change. */}
                <input type ="text" name = "title" style ={{flex: '10', padding: '5px'}} value = {this.state.title} 
                onChange = {this.handleChange.bind(this)} />
                {/*give the input type and value submit with class and style  */}
                <input type = 'submit' value ='Submit' className = 'btn' style = {{flex: '2'}} />
            </form>
            
        )
    }
}

export default AddTodo