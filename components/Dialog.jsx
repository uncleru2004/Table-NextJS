import { memo } from "react";
import css from "./dialog.module.css";

export default memo(function Dialog({ children }) {
  return <div className={css.popup}>{children}</div>;
});
