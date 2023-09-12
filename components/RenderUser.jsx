import { memo } from "react";
import { columns } from "./fetcher";

export default memo(function RenderUser({ user }) {
  //console.log("renderUser");

  return (
    <tr id={user.id}>
      {columns.map(({ title, getVal }) => (
        <td key={title}>{getVal(user)}</td>
      ))}
      <td>
        <button id="delUser">❌</button>
      </td>
    </tr>
  );
});
