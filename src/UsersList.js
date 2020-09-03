import React, { useContext } from "react";
import { UserContext } from "./GlobalState";

export default function UsersList() {
  const { users } = useContext(UserContext);
  console.log(users);
  return (
    <div className="flex-large">
      <h4>View Users</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
