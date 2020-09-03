import React from "react";
import "./main.css";
import { UsersProvider } from "./GlobalState";
import { HomePage } from "./HomePage";

function App() {

  return (
    <UsersProvider>  
      <HomePage />
    </UsersProvider>
  );
}

export default App;
