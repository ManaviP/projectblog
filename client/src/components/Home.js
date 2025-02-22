import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPosts } from "../api/api";

const Home = () => {
  const [posts, setPosts] = useState([]);

  

  // Inline styles
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      margin: '20px',
    },
    title: {
      textAlign: 'center',
      color: '#333',
    },
    postList: {
      listStyleType: 'none',
      padding: 0,
    },
    postItem: {
      margin: '20px 0',
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    },
    postTitle: {
      margin: '0',
      fontSize: '1.5rem',
      color: '#0f81c7',
    },
    postSummary: {
      fontSize: '1rem',
      color: '#555',
    },
    link: {
      color: '#0f81c7',
      textDecoration: 'none',
      fontWeight: 'bold',
    },
    linkHover: {
      textDecoration: 'underline',
    },
    createPostLink: {
      display: 'block',
      marginTop: '20px',
      textAlign: 'center',
      fontSize: '1.2rem',
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Blog Posts</h1>
      <Link to="/create" style={styles.createPostLink}>Create New Post</Link>
      <ul style={styles.postList}>
        {posts.map((post) => (
          <li key={post._id} style={styles.postItem}>
            <h2 style={styles.postTitle}>{post.title}</h2>
            <Link to={`/post/${post._id}`} style={styles.link} 
                  onMouseEnter={(e) => e.target.style.textDecoration = styles.linkHover.textDecoration} 
                  onMouseLeave={(e) => e.target.style.textDecoration = 'none'}>
              Read More
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
