import * as React from "react";
import { Link } from "react-router-dom";

function UsersIndexPage({ users }) {
  console.log(users[0].base);
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={user.base}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersIndexPage;
