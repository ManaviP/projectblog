import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getPost, deletePost } from "../api/api";

const Post = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await getPost(id);
      setPost(response.data);
    };
    fetchPost();
  }, [id]);

  const handleDelete = async () => {
    await deletePost(id);
    navigate("/");
  };

  if (!post) return <p>Loading...</p>;

  // Inline CSS styles
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      margin: '20px',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    title: {
      fontSize: '2rem',
      color: '#0f81c7',
      marginBottom: '10px',
    },
    content: {
      fontSize: '1rem',
      lineHeight: '1.6',
      marginBottom: '20px',
      color: '#555',
    },
    link: {
      color: '#0f81c7',
      textDecoration: 'none',
      fontWeight: 'bold',
      marginRight: '10px',
    },
    button: {
      backgroundColor: '#d9534f',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      fontSize: '1rem',
      cursor: 'pointer',
      borderRadius: '4px',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#c9302c',
    },
    goBackLink: {
      display: 'block',
      marginTop: '20px',
      fontSize: '1.1rem',
      textDecoration: 'none',
      color: '#0f81c7',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{post.title}</h1>
      <p style={styles.content}>{post.content}</p>
      <Link to={`/edit/${id}`} style={styles.link}>Edit</Link>
      <button
        style={styles.button}
        onClick={handleDelete}
        onMouseEnter={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
        onMouseLeave={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
      >
        Delete
      </button>
      <Link to="/" style={styles.goBackLink}>Go Back</Link>
    </div>
  );
};

export default Post;
