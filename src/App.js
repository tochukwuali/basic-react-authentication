import React, {useState} from "react";
import "./main.css";
import UsersProvider from "./GlobalState";
import HomePage from "./HomePage";


function App() {

  return (
    <UsersProvider>  
      <div className="small-container">
           <HomePage />
      </div>
    </UsersProvider>
  );
}

export default App;
