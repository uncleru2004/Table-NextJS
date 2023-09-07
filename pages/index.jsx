import { useState, useEffect } from "react";
import RenderUser from "../components/RenderUser";
import Dialog from "../components/Dialog";
import RenderInfo from "../components/RenderInfo";
import css from "../components/table.module.css";
import { fetcher } from "../components/fetcher";
import RenderPosts from "../components/RenderPosts";

export default function FetchUsers() {
  const [users, setUsers] = useState(null),
    [error, setError] = useState(null),
    [info, setInfo] = useState(null),
    [posts, setPosts] = useState([]),
    [openDialogUser, setOpenUser] = useState(false),
    [openDialogPosts, setOpenPosts] = useState(false);

  console.log(posts);

  useEffect(() => {
    async function fetchUser() {
      setUsers(await fetcher(""));
    }
    fetchUser();
  }, []);

  if (error) return <div>Ошибка: {error.message}</div>;

  if (users) {
    return (
      <>
        {openDialogUser && (
          <Dialog>
            <RenderInfo info={info} />
            <button
              className="buttonClose"
              onClick={() => {
                setOpenUser(false);
              }}
            >
              X
            </button>
            <button
              onClick={() => {
                async function fetchPosts() {
                  setPosts(await fetcher(info.id + "/posts"));
                }
                fetchPosts();
                setOpenPosts(true);
              }}
            >
              Posts
            </button>
          </Dialog>
        )}
        {openDialogPosts && (
          <Dialog>
            {posts.map((post) => (
              <RenderPosts post={post} key={post.id} />
            ))}
            <button
              className="buttonClose"
              onClick={() => {
                setOpenPosts(false);
              }}
            >
              X
            </button>
          </Dialog>
        )}

        <table className={css.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>City</th>
              <th>Street</th>
              <th>Suite</th>
            </tr>
          </thead>
          <tbody
            onClick={(event) => {
              async function fetchInfo() {
                const tr = event.target.closest("tr");
                setInfo(await fetcher(tr.id));
              }
              fetchInfo();
              setOpenUser(true);
              setPosts([]);
            }}
          >
            {users.map((user) => (
              <RenderUser user={user} key={user.id} />
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
