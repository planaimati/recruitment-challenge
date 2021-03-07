import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../context";

const StyledListItem = styled.li`
  display: flex;
  width: 50%;
  height: 7rem;
  background-color: pink;
  margin: 0.5rem;
  align-items: center;
  justify-content: space-around;
  border-radius: 2px;
  background-color: grey;
  border: 2px solid grey;
`;

const StyledImgWrapper = styled.div`
  height: 5rem;
  width: 5rem;
  background-color: #fff;
  border: 2px solid black;
  margin-left: 2rem;
  border-radius: 50%;
`;
const StyledImg = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 50%;
`;

const StyledTextWrapper = styled.div`
  width: 50%;
`;
const StyledText = styled.p`
  font-family: sans-serif;
  font-size: 2rem;
  margin-left: 3rem;
  letter-spacing: 0.1rem;
`;

const StyledInput = styled.input`
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 0.5rem;
  border: 2px solid black;
  cursor: pointer;
`;

const ListItem = (props) => {
  const { toggleCheck } = useContext(AppContext);

  return (
    <StyledListItem>
      <StyledImgWrapper>
        <StyledImg src={props.avatar}></StyledImg>
      </StyledImgWrapper>
      <StyledTextWrapper>
        <StyledText>{`${props.firstName}  ${props.lastName}`}</StyledText>
      </StyledTextWrapper>

      <StyledInput
        type="checkbox"
        checked={props.active}
        onChange={toggleCheck}
        id={props.id}
      ></StyledInput>
    </StyledListItem>
  );
};

export default ListItem;
