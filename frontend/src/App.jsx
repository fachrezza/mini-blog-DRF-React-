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
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif", backgroundColor: "#f9f9f9" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>📝 Mini Blog</h1>
      
      <div style={{ display: "grid", gap: "2rem" }}>
        {posts.map(post => (
          <div
            key={post.id}
            style={{
              backgroundColor: "#fff",
              borderRadius: "12px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              padding: "1.5rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h2 style={{ marginBottom: "1rem", textAlign: "center" }}>{post.title}</h2>
            
            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  borderRadius: "8px",
                  marginBottom: "1rem",
                }}
              />
            )}

            <p style={{ fontSize: "1.1rem", lineHeight: "1.6", textAlign: "justify" }}>{post.content}</p>
            <small style={{ marginTop: "1rem", color: "#666" }}>
              {new Date(post.created_at).toLocaleString()}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
