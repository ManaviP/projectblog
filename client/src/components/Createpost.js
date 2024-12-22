import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../api/api";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPost({ title, content });
    navigate("/");
  };

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
    heading: {
      fontSize: '2rem',
      color: '#0f81c7',
      marginBottom: '20px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    },
    label: {
      fontSize: '1rem',
      color: '#333',
    },
    input: {
      padding: '10px',
      fontSize: '1rem',
      borderRadius: '4px',
      border: '1px solid #ccc',
      marginBottom: '10px',
    },
    textarea: {
      padding: '10px',
      fontSize: '1rem',
      borderRadius: '4px',
      border: '1px solid #ccc',
      marginBottom: '20px',
      minHeight: '150px',
    },
    button: {
      backgroundColor: '#0f81c7',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      fontSize: '1rem',
      cursor: 'pointer',
      borderRadius: '4px',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#0a65a1',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Create New Post</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div>
          <label style={styles.label}>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div>
          <label style={styles.label}>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            style={styles.textarea}
          />
        </div>
        <button
          type="submit"
          style={styles.button}
          onMouseEnter={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
          onMouseLeave={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
