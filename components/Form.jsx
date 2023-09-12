import { memo, useRef } from "react";

export default memo(function Form({ transferValue }) {
  console.log("render Form");
  const inputValue = useRef("");

  function filter() {
    const el = inputValue.current;
    transferValue(el.value);
    console.log(el.value);
  }

  return (
    <input
      type="text"
      placeholder="Введите значение..."
      ref={inputValue}
      onInput={filter}
    />
  );
});
