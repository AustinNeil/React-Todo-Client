import React from 'react';
import TodoItem from './TodoItem';
import styled from 'styled-components';
const TodoList = props => {
    // Map through all todos
    console.log(props);
    console.log(props.todos);
    const todoNode = props.todos.map((todo) => {
        return (<TodoItem todo={todo} key={todo.id} remove={props.remove}/>)
    })
    return(<TodoListContainer>{todoNode}</TodoListContainer>)
}

export default TodoList;

const TodoListContainer = styled.ul`
    padding: 0;
    margin: 25px 0px 5px 0px;
`;