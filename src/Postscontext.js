import { useState, useEffect, createContext } from "react";

export const Postscontext = createContext();

export const Postprovider = (props) => {
  const [post, setPost] = useState([]);

  const fetching = () => {
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
      .then((raw) => raw.json())
      .then((data) => setPost([...data]));
  };

  useEffect(() => {
    fetching();
  }, []);

  return (
    <Postscontext.Provider value={[post, setPost]}>
      {props.children}
    </Postscontext.Provider>
  );
};
