import React, { createContext, useContext, useEffect, useState } from "react";
// @ts-ignore
const SampleContext = createContext();
// @ts-ignore
const SampleContextProvider = ({ children }) => {
  const [state, setState] = useState();

  useEffect(() => {
    // ...
  }, []);

  return <SampleContext.Provider value={{ state, setState }}>{children}</SampleContext.Provider>;
};

const useSample = () => {
  return useContext(SampleContext);
};

export { SampleContextProvider, useSample };
