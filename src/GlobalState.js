import React from 'react'

const users = [
    {
      id: 1,
      name: "Tochukwu",
      email: "toks@gmail.com"
    },
    {
      id: 2,
      name: "Emeka",
      email: "Emex@yahoo.com"
    },
    {
      id: 3,
      name: "Ebere",
      email: "Eby4real@gmail.com"
    }
  ];

export const UserContext = React.createContext(users)

export const UsersProvider = () => {
    return (
        <UserContext.Provider />
    )
}


export default userContext

