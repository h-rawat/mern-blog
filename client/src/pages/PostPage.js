import { formatISO9075 } from "date-fns";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PostPage() {
  const params = useParams();
  const [postInfo, setPostInfo] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/post/${params.id}`).then((res) => {
      res.json().then((postInfo) => setPostInfo(postInfo));
    });
  }, []);

  if (!postInfo) return "";

  return (
    <div className="post-page">
      <h1>{postInfo.title}</h1>
      <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
      <div className="author">by @{postInfo.author.username}</div>

      <div className="Image">
        <img src={`http://localhost:4000/${postInfo.cover}`} alt="blog cover" />
      </div>

      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: postInfo.content }}
      />
    </div>
  );
}
