import React, { useState, useEffect } from "react";

export const AppContext = React.createContext();
export const AppContextProvider = ({ children }) => {
  //state

  const [items, setItems] = useState([]);
  const [searchItems, setSearchItems] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);

  //pobranie danych z API

  useEffect(() => {
    fetch(
      "https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json"
    )
      .then((response) => response.json())
      .then((data) => {
        const newDataArrSorted = data
          .map((item) => ({ ...item, active: false }))
          .sort(sortItems);

        setSearchItems(newDataArrSorted);
        setItems(newDataArrSorted);
      });
  }, []);

  useEffect(() => {
    console.log(checkedItems);
  }, [checkedItems]);

  const sortItems = (a, b) => {
    if (a.last_name < b.last_name) {
      return -1;
    }
    if (a.last_name > b.last_name) {
      return 1;
    }
    return 0;
  };

  // wyszukiwarka

  const toggleSetSearch = (e) => {
    const searchItemsArr = items.filter(
      (item) =>
        item.first_name.toLowerCase().includes(e.target.value) ||
        item.last_name.toLowerCase().includes(e.target.value)
    );

    setSearchItems(searchItemsArr);
  };

  //checkbox

  const toggleCheck = (e) => {
    const newArr = searchItems.filter(
      (item) => item.id.toString() !== e.target.id
    );

    const clickedItem = searchItems.find(
      (item) => item.id.toString() === e.target.id
    );

    clickedItem.active = !clickedItem.active;

    setSearchItems(
      (prevState) => (prevState = [...newArr, clickedItem].sort(sortItems))
    );

    if (checkedItems.includes(e.target.id)) {
      const updatedArr = checkedItems.filter((item) => item !== e.target.id);

      setCheckedItems(updatedArr);
    } else {
      setCheckedItems([...checkedItems, e.target.id]);
    }
  };

  return (
    <AppContext.Provider
      value={{
        items,
        toggleSetSearch,
        searchItems,
        toggleCheck,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
