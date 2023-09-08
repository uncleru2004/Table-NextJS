import { memo } from "react";

export default memo(function RenderUser({ user }) {
  console.log("render");
  const {
    id,
    name,
    username,
    email,
    address: {
      street,
      suite,
      city,
      zipcode,
      geo: { lat, lng },
    },
    phone,
    website,
    company: { name: cname, catchPhrase, bs },
  } = user;

  return (
    <tr id={id}>
      <td>{id}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{city}</td>
      <td>{street}</td>
      <td>{suite}</td>
      <td>
        <button id="delUser">❌</button>
      </td>
    </tr>
  );
});
