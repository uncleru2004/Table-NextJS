import Dialog from "./Dialog";
import { fetcher } from "./fetcher";
import RenderInfo from "./RenderInfo";

export default function UserInfoPopUp({info, openUser, openPosts, userPosts}) {
  return (
    <Dialog class_name="popupInfo">
      <RenderInfo info={info} />
      <button
        className="buttonClose"
        onClick={() => {
          openUser(false);
        }}
      >
        ❌
      </button>
      <button
        onClick={() => {
          async function fetchPosts() {
            userPosts(await fetcher(info.id + "/posts"));
          }
          fetchPosts();
          openPosts(true);
        }}
      >
        Posts
      </button>
    </Dialog>
  );
}
