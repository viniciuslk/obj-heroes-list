import React, { useContext, createContext, useState } from "react";

const Context = createContext({});
export const useAppContext = () => useContext(Context);

const ObjAppProvider = ({ children }) => {
  const [hero, setHero] = useState(null);

  const value = {
    hero,
    setHero
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ObjAppProvider;
