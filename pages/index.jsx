import { useState, useEffect } from "react";
import RenderUser from "../components/RenderUser";
import css from "../components/table.module.css";

export default function FetchUsers() {
  const [users, setUsers] = useState(null),
    [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) throw new Error("fetch " + response.status);
        setUsers(await response.json());
        setError(null);
      } catch (err) {
        setError(err);
      }
    }
    fetchUser();
  }, []);

  if (error) return <div>Ошибка: {error.message}</div>;

  if (users) {
    //return console.log(users)
    return (
      <table className={css.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Street</th>
            <th>Suite</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <RenderUser user={user} key={user.id} />
          ))}
        </tbody>
      </table>
    );
  };
}
