import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
const ErrorModal = props => {
    if(props.showError){
        return(<ErrorBox>{props.errorMessage}</ErrorBox>)
    }
    return null;
}
ErrorModal.propTypes = {
    showError: PropTypes.bool,
    errorMessage: PropTypes.string
};
export default ErrorModal;

const ErrorBox = styled.div`
    color: white;
    background: #E15554;
    font-size: 2em;
    text-align: center;
`;