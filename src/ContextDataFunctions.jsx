import { useState, createContext, useContext } from "react";

const Context = createContext();

export default function ChangeSelected({ children }) {
  const [isSelected, setIsSelected] = useState(false);
  const [guestId, setGuestId] = useState();
  const [guests, setGuests] = useState();
  const returnStatement = {
    isSelected,
    setIsSelected,
    guestId,
    setGuestId,
    guests,
    setGuests,
  };

  return (
    <Context.Provider value={returnStatement}>{children}</Context.Provider>
  );
}

export function ContextData() {
  return useContext(Context);
}
