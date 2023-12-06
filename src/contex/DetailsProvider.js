import React, { useState } from "react";
import DetailsContex from "./DetailsContex";

const DetailsProvider = ({ children }) => {
  const [asideDisplay, setAsideDisplay] = useState(false);
  const [details, setDetails] = useState();
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);
  const [menu, setMenu] = useState(false);

  const contextValue = {
    asideDisplay,
    setAsideDisplay,
    details,
    setDetails,
    search,
    setSearch,
    modal,
    setModal,
    menu,
    setMenu,
  };

  return (
    <DetailsContex.Provider value={contextValue}>
      {children}
    </DetailsContex.Provider>
  );
};

export default DetailsProvider;
