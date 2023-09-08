import { memo, useState, useEffect, useCallback } from "react";
import { fetcher } from "./fetcher";
import Table from "./Table";
import UserInfoPopUp from "./UserInfoPopUp";
import UserPostsPopUp from "./UserPostsPopUp";

export default memo(function InitTable() {
 
  console.log("InitTable render");

  const [users, setUsers] = useState(null),
    [error, setError] = useState(null),
    [info, setInfo] = useState(null),
    [posts, setPosts] = useState([]),
    [openDialogUser, setOpenUser] = useState(false),
    [openDialogPosts, setOpenPosts] = useState(false),
    userInfo = useCallback((items) => setInfo(items), []),
    openUser = useCallback((item) => {
      setOpenUser(item);
    }, []),
    openPosts = useCallback((item) => {
      setOpenPosts(item);
    }, []),
    userPosts = useCallback((items) => {
      setPosts(items);
    }, []),
    deleteUser = useCallback(
      (id) => setUsers((old) => old.filter((item) => item.id !== id)),
      []
    );

    console.log(users)

  useEffect(() => {
    async function fetchUser() {
      setUsers(await fetcher(""));
    }
    fetchUser();
  }, []);

  return (
    <>
      {openDialogUser && (
        <UserInfoPopUp
          info={info}
          openPosts={openPosts}
          openUser={openUser}
          userPosts={userPosts}
        />
      )}

      {openDialogPosts && (
        <UserPostsPopUp posts={posts} openPosts={openPosts} />
      )}

      <Table
        users={users}
        userInfo={userInfo}
        openUser={openUser}
        openPosts={openPosts}
        deleteUser={deleteUser}
      />
    </>
  );
});
