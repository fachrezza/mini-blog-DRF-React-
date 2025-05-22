import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/posts/')
      .then(res => setPosts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Mini Blog</h1>
      {posts.map(post => (
        <div key={post.id} style={{ marginBottom: "1rem", borderBottom: "1px solid #ccc" }}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <small>{new Date(post.created_at).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
}

export default App;
