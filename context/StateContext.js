import React, { createContext, useContext, useState } from "react";

const stateContext = createContext();

export default function StateContext({ children }) {

  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  return (
    <stateContext.Provider
      value={{ filtered, setFiltered, activeGenre, setActiveGenre }}
    >
      {children}
    </stateContext.Provider>
  );
}

// Context Hook
export const useStateContext = () => useContext(stateContext);