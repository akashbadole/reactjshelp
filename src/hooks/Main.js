import React, { useEffect, useState } from "react";
import Axios from "axios";

const App = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    console.log("hello");
    Axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      const showData = res.data.splice(0, 5);
      console.log(showData);
      setPosts(showData);
    });
  }, []);
  return (
    <div>
      {posts.map(post => {
        return (
          <div
            key={post.id}
            style={{
              width: 250,
              border: "1px solid #ccc",
              boxShadow: "5px 5px 10px #3c3c3c",
              display: "inline-block",
              padding: "8px 10px",
              margin: 16
            }}
          >
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
