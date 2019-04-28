import React from 'react';
import './todoItem.css';

export default class TodoItem extends React.Component{
    constructor(props){
        super(props);
    }

    /**
     * call removeTodo from App.js
     * @param {id} id - ToDo task Id
     */
    removeTodo(id){
        this.props.removeTodo(id);
    }

    finishedTodo(id){
        this.props.finishedTodo(id);
    }

    render(){
        return(
            <div className="todoWrapper">
                <button className="removeTodo" onClick={(e) => this.removeTodo(this.props.id)}>Remove</button>
                <button className="finishedTodo" onClick={(e) => this.finishedTodo(this.props.id)}>Finished</button>
                {this.props.todo.text}
            </div>
        );
    }
}