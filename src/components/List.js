import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../context";
import ListItem from "./ListItem";

const StyledList = styled.ul`
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
`;

const List = () => {
  const { searchItems } = useContext(AppContext);

  if (searchItems.length === 0) {
    return <p>list is empty</p>;
  } else {
    return (
      <StyledList>
        {searchItems.map((item) => (
          <ListItem
            id={item.id}
            key={item.id}
            avatar={item.avatar}
            active={item.active}
            firstName={item.first_name}
            lastName={item.last_name}
          ></ListItem>
        ))}
      </StyledList>
    );
  }
};

export default List;
