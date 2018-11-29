import React, { Component } from 'react';
import TodoContainer from './TodoContainer';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

class App extends Component {
  render() {
    return (
      <AppContainer>
          <GlobalStyle/>
          <TodoContainer/>
      </AppContainer>
    );
  }
}

export default App;

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    width: 100%;
    background: #78909C;
  }
  body {
    height: 100%;
    width: 100%;
    font-family: 'Lato', sans-serif;
  }
`;

const AppContainer = styled.span`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  font-weight: 400;
`;