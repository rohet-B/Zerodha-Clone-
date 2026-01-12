import React, { useState } from "react";
import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow"; // create this file similar to Buy window

const GeneralContext = React.createContext({
  openActionWindow: (uid, type) => {}, // type: "BUY" or "SELL"
  closeActionWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [actionType, setActionType] = useState("BUY"); // default action

  const openActionWindow = (uid, type) => {
    setSelectedStockUID(uid);
    setActionType(type);
    setIsWindowOpen(true);
  };

  const closeActionWindow = () => {
    setSelectedStockUID("");
    setActionType("BUY");
    setIsWindowOpen(false);
  };

  return (
    <GeneralContext.Provider
      value={{
        openActionWindow,
        closeActionWindow,
      }}
    >
      {props.children}

      {isWindowOpen &&
        (actionType === "BUY" ? (
          <BuyActionWindow uid={selectedStockUID} />
        ) : (
          <SellActionWindow uid={selectedStockUID} />
        ))}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
