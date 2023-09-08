import css from "./table.module.css";
import { fetcher } from "./fetcher";
import RenderUser from "./RenderUser";
import { memo } from "react";

export default memo(function Table({ users, userInfo, openUser, openPosts }) {
  
  if (users) {
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
            <th></th>
          </tr>
        </thead>
        <tbody
          onClick={(event) => {
            async function fetchInfo() {
              const tr = event.target.closest("tr");
              userInfo(await fetcher(tr.id));
            }
            fetchInfo();
            openUser(true);
            openPosts(false);
          }}
        >
          {users.map((user) => (
            <RenderUser user={user} key={user.id} />
          ))}
        </tbody>
      </table>
    );
  }
});
