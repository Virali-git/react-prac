import React, { createContext, useContext, useReducer } from "react";

//prepare the data Layer
export const StateContext = createContext();

//wrap our app, provide data Layer inside of every component we have
export const StateProvider = ({ reducer, intialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, intialState)}>
    {children}
  </StateContext.Provider>
);

//pull information from data Layer
export const useStateValue = () => useContext(StateContext);

//intialState: what is the datalayer look like in the beginning && reducer is how we manipulate/play with the datalayer
