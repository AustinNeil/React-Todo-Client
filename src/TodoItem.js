import React from 'react';

// Presentation component, only receives props
const TodoItem = props => {
    return (
        <li onClick={() => {props.remove(props.todo.id)}}>
            {props.todo.text}
        </li>
    );
}

export default TodoItem;