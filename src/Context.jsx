import React, { createContext, useReducer, useState } from "react";
import { reducer } from "./reducer";

export const AppContext = createContext();

const Context = ({ children }) => {
  const localStorageData = localStorage.getItem("appData");
 
  const localStorageExData = JSON.parse(localStorageData);
  
//   const [inputValue, setInputValue] = useState("");
//   const [data, setData] = useState(localStorageExData);

const initialState = {
    inputValue: '',
    data: localStorageExData
}

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={[state,dispatch]}>
      {children}
    </AppContext.Provider>
  );
};

export default Context;
