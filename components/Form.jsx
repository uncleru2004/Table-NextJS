import { memo, useState } from "react";

export default memo(function Form({ transferValue }) {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <button onClick={transferValue(value)}>Поиск</button>
    </>
  );
});
