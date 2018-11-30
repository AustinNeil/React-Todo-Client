import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
const TodoTitle = props => {
    return(
        <TitleContainer>{props.title}</TitleContainer>
    )
}
TodoTitle.propTypes = {
    title: PropTypes.string
};
export default TodoTitle;

const TitleContainer = styled.span`
    margin: 0;
    padding: 0;
    font-size: 3em;
    height: 100%;
    width: 100%;
    color: #E1BC29;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;