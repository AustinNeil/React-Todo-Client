import React from 'react';
import styled from "styled-components";
// Presentation component, only receives props
const TodoItem = props => {
    return (
        <ItemContainer onClick={() => {props.remove(props.todo.id)}}>
            <Item>{props.todo.text}</Item>
        </ItemContainer>
    );
}

export default TodoItem;

const ItemContainer = styled.li`
    list-style-type: none;
    font-size: 1.2em;
    padding: 0 0 0 0;
    margin: 10px 0 10px 0;
    font-size: 1.4em;
    text-align: center;
`;

const Item = styled.div`
    border: 1px solid black;
    padding: 0;
    margin: 0;
`;