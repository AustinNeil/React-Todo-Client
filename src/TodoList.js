import React from 'react';
import TodoItem from './TodoItem';

const TodoList = props => {
    // Map through all todos
    console.log(props);
    console.log(props.todos);
    const todoNode = props.todos.map((todo) => {
        return (<TodoItem todo={todo} key={todo.id} remove={props.remove}/>)
    })
    return(<ul>{todoNode}</ul>)
}

export default TodoList;