import css from "./table.module.css";
import { fetcher } from "./fetcher";
import RenderUser from "./RenderUser";
import { memo } from "react";
import { columns } from "./fetcher";

export default memo(function Table({
  users,
  userInfo,
  openUser,
  openPosts,
  deleteUser,
}) {
  if (users) {
    return (
      <table className={css.table}>
        <thead>
          <tr>
            {columns.map(({ title }) => (
              <th key={title}>{title}</th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody
          onClick={(event) => {
            const tr = event.target.closest("tr");
            console.log(event.target.id);

            if (event.target.id === "delUser") {
              console.log(tr.id);
              deleteUser(tr.id);
              openUser(false);
              openPosts(false);
            } else {
              async function fetchInfo() {
                userInfo(await fetcher(tr.id));
              }
              fetchInfo();
              openUser(true);
              openPosts(false);
            }
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
