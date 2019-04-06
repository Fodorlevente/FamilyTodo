import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import TodoInput from './components/todoInput';
import TodoItem from './components/todoItem';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      todos: [
        {id: 0, text: "Learn Js"}
      ],
      nextId: 3, //like a pointer
      name : null,
      priority : null
    }

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.finishedTodo = this.finishedTodo.bind(this);
  }

  componentDidMount() {
    
    // Call our fetch function below once the component mounts
      this.callBackendAPI()
        .then(res => this.setState({name : res.express.name ,priority : res.express.priority }))
        .then(res => this.setState({name : res.express.name }))
        .catch(err => console.log(err));
    }

    callBackendAPI = async () => {
      const response = await fetch('/express_backend');
      const body = await response.json();

      if (response.status !== 200) {
        throw Error(body.message) 
      }
      return body;
    };

  addTodo(todoText){
    let todos = this.state.todos.slice();
    todos.push({id: this.state.nextId, text: todoText});
    this.setState({
      todos: todos,
      nextId: ++this.state.nextId
    })
  }

  removeTodo(id){
    this.setState({
      todos: this.state.todos.filter((todo, index) => todo.id !== id)
    })
  }

  finishedTodo(id){
    console.log(id);
  }

  render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
          <Header />
          <TodoInput todoText="" addTodo={this.addTodo}/>
          <ul>
            {
              this.state.todos.map((todo)=>{
                return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo}  finishedTodo={this.finishedTodo} />
                }
              )
            }
          </ul>
        </div> {this.state.priority}{this.state.name}
      </div>
    );
  }
}

export default App;
