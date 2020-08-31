import React from "react";
import "./App.css";
import userContext from "./UserContext";
import HomePage from "./HomePage";

function App() {
  const user = [
    {
      id: 1,
      name: "Tochukwu",
      username: "toks"
    },
    {
      id: 2,
      name: "Emeka",
      username: "Emex"
    },
    {
      id: 3,
      name: "Ebere",
      username: "Eby"
    }
  ];

  return (
    <userContext.Provider value={user}>
      <HomePage />
    </userContext.Provider>
  );
}

export default App;
