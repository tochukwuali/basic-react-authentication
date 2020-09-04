import React, { createContext, useReducer } from "react";
import userReducer from "./userReducer";

const users = [
  {
    id: 1,
    name: "Tochukwu",
    email: "toks@gmail.com",
    status: 'Yes'
  },
  {
    id: 2,
    name: "Emeka",
    email: "Emex@yahoo.com",
    status: 'No'
  },
  {
    id: 3,
    name: "Ebere",
    email: "Eby4real@gmail.com",
    status: 'Yes'
  }
];

export const UserContext = createContext(users);

export const UsersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, users);

  function addUser(user) {
    dispatch({
      type: "ADD_USER",
      payload: user
    });
  }

  return (
    <UserContext.Provider
      value={{
        users: state,
        addUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
