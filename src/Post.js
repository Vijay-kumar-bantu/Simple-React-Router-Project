import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Post = () => {
  const [post, setPost] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    fetching();
  }, []);

  const fetching = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=1&id=${id}`)
      .then((raw) => raw.json())
      .then((data) => setPost(data[0]));
  };

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Post;
