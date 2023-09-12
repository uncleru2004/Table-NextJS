import { memo, useState, useEffect, useCallback } from "react";
import { fetcher } from "./fetcher";
import Table from "./Table";
import Form from "./Form";
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
      (id) => setUsers((old) => old.filter((item) => item.id != id)),
      []
    ),
    transferValue = useCallback((value) => {
      if (value) {
        async function fetchItems() {
          setUsers(
            (await fetcher("")).filter(
              (item) =>
                item.name.includes(value) ||
                item.email.includes(value) ||
                item.address.city.includes(value) ||
                item.address.street.includes(value)
            )
          );
        }
        fetchItems();
      } else {
        async function fetchItems() {
          setUsers(await fetcher(""));
        }
        fetchItems();
      }
    }, []);

  //console.log(users);

  /*useEffect(() => {
    async function fetchItems() {
      setUsers(await fetcher(""));
    }
    fetchItems();
  }, []);*/

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

      <Form transferValue={transferValue} />

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
