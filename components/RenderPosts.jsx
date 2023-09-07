import { memo } from "react";

export default memo(function RenderPosts({ post }) {
  if (post) {
    const { id, title, body } = post;

    return (
      <>
        <p>{id}</p>
        <p>{title}</p>
        <p>{body}</p>
      </>
    );
  }
});
