import React from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';
// Presentation component, only receives props
const TodoItem = props => {
    return (
        <ItemContainer onClick={() => {props.remove(props.todo.id)}}>
            <Item>{props.todo.text}</Item>
        </ItemContainer>
    );
}

TodoItem.propTypes = {
    remove: PropTypes.func,
    todo: PropTypes.object
};

export default TodoItem;

const ItemContainer = styled.li`
    list-style-type: none;
    font-size: 1.2em;
    padding: 0 0 0 0;
    margin: 10px 0 20px 0;
    font-size: 1.4em;
    text-align: center;
    background-color: #E1BC29;
`;

const Item = styled.div`
    // border: 1px solid black;
    padding: 0;
    margin: 0;
    width: 275px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
`;