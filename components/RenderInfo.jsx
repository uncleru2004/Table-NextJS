import { memo } from "react";

export default memo(function RenderInfo({ info }) {
  if (info) {
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
    } = info;

    return (
      <>
        <p>{id}</p>
        <p>{name}</p>
        <p>{email}</p>
        <p>{city}</p>
        <p>{street}</p>
        <p>{suite}</p>
      </>
    );
  }
});
