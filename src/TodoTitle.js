import React from 'react';
import styled from 'styled-components';
const TodoTitle = () => {
    return(
        <TitleContainer>To-Do List</TitleContainer>
    )
}

export default TodoTitle;

const TitleContainer = styled.span`
    margin: 0;
    padding: 0;
    font-size: 3em;
    height: 100%;
    width: 100%;
    color: #E1BC29;
    font-weight: 700;
`;