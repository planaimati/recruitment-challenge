import React from "react";
import GlobalStyle from "./theme/GlobalStyle";
import styled from "styled-components";
import List from "./components/List";
import Search from "./components/Search";

const StyledWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <StyledWrapper>
        <Search />
        <List />
      </StyledWrapper>
    </>
  );
};

export default App;
