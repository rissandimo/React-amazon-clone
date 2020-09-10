// Data Layer - store info, status

import React, { createContext, useContext, useReducer } from "react";


// Create data layer
export const StateContext = createContext();

// Provider -> wrap app inside -> all components get direct access to data if needed
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// allows to access data directory from any component
export const useStateValue = () => useContext(StateContext);