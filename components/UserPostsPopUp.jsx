import Dialog from "./Dialog";
import RenderPosts from "./RenderPosts";

export default function UserPostsPopUp({posts, openPosts}) {
  return (
    <Dialog class_name="popupPost">
      {posts.map((post) => (
        <RenderPosts post={post} key={post.id} />
      ))}
      <button
        className="buttonClose"
        onClick={() => {
          openPosts(false);
        }}
      >
        ❌
      </button>
    </Dialog>
  );
}
