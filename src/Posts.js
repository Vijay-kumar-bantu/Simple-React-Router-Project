import { useContext } from "react";
import { Postscontext } from "./Postscontext";
import { Link } from "react-router-dom";
import "./Posts.css";

const Posts = () => {
  const [post] = useContext(Postscontext);

  return (
    <div className="Post-area">
      {post.map((element) => {
        return (
          <div className="Post" key={element.id}>
            <Link to={`/Post/${element.id}`}>
              <h2>{element.title}</h2>
            </Link>

            <p>{element.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
