import { memo } from "react";
import css from "./dialog.module.css";

export default memo(function Dialog({ class_name, children }) {
  return <div className={css[class_name]}>{children}</div>;
});
