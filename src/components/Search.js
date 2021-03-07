import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../context";

const StyledContainer = styled.div`
  height: 20rem;
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledForm = styled.form`
  display: flex;
  width: 80%auto;
  align-items: center;
`;

const StyledInput = styled.input`
  height: 3rem;
  width: 100%;
  margin: 2rem;
`;

const Search = () => {
  const { toggleSetSearch } = useContext(AppContext);
  return (
    <StyledContainer>
      <StyledForm>
        <StyledInput
          type="text"
          onChange={(e) => toggleSetSearch(e)}
          placeholder=""
        />
        <label>search</label>
      </StyledForm>
    </StyledContainer>
  );
};

export default Search;
