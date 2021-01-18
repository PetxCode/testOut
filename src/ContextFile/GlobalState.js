import Recat, { useReducer, createContext } from "react";
import { AppReducer } from "./AppReducer";

const initState = {
  users: [
    { id: 1, name: "Peter" },
    { id: 2, name: "Bukky" },
    { id: 3, name: "Ola" },
    { id: 4, name: "Osas" },
  ],
};

export const GlobalContext = createContext(initState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initState);

  //Rover User Action

  const removeUser = (id) => {
    dispatch({
      type: "REMOVE_USER",
      payload: id,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        users: state.users,
        removeUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
