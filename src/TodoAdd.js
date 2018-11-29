import React from 'react';
const TodoAdd = ({addTodo}) => {
    let input;
    return(
        <div>
            <input ref={node => {
                input = node;
            }}/>
            <button onClick={() => {
                addTodo(input.value);
                input.value = '';
            }}> Add </button>
        </div>
    );
};

export default TodoAdd;