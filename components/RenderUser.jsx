export default function RenderUser({ user }) {
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
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{city}</td>
      <td>{street}</td>
      <td>{suite}</td>
    </tr>
  );
};
