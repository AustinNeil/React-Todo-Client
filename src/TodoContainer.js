import React, {Component} from 'react';
import TodoAdd from './TodoAdd';
import TodoTitle from './TodoTitle';
import TodoList from './TodoList';
// Container, Should store the State
window.id = 0;
export default class TodoContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [{text: "hi", id: 6}, {text:"hello",id: 7}]
        }
    }
    // add handler
    addTodo(val){
        const todo = {text: val, id: window.id++}
        this.setState(state =>{
            const data = [...state.data, todo];
            return{data}
        })
    }
    // remove handler
    handleRemove(id){
        const remainder = this.state.data.filter((todo) => {
            if(todo.id !== id){
                return todo;
            }
        });
        this.setState({data: remainder});
    }
    render(){
        return(
            <div>
                <TodoTitle/>
                <TodoAdd addTodo={this.addTodo.bind(this)}/>
                <TodoList 
                    todos={this.state.data}
                    remove={this.handleRemove.bind(this)}
                />
            </div>
        )
    }
}