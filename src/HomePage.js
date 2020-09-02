import React from "react";

import Header from "./Header";
import AddUser from "./AddUser";
import Users from './UsersList'

function HomePage() {
  return (
    <div className="medium-container">
      <Header />
      <div className="flex-row">
        <AddUser />
        <Users />
      </div>
    </div>
  );
}

export default HomePage;
