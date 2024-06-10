import { useEffect, useState } from "react";
import Post from "../Post";

export default function IndexPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/post").then((res) => {
      res.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);

  return (
    <>
      {posts.length ? (
        posts.map((post) => {
          return <Post {...post} key={post._id} />;
        })
      ) : (
        <></>
      )}
    </>
  );
}
