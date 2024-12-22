import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Blog Application</h1>
      <nav>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link to="/" style={styles.navLink}>Home</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/create" style={styles.navLink}>Create Post</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#0f81c7',
    color: 'white',
    padding: '10px 20px',  // Reduced padding for a thinner header
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    margin: '0',  // Remove margin to make it inline with other elements
    fontSize: '1.2rem',  // Slightly smaller font size
  },
  navList: {
    display: 'flex',
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  navItem: {
    margin: '0 10px',  // Reduced space between items
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '0.9rem',  // Slightly smaller font size for a thinner look
    transition: 'color 0.3s',
  },
  navLinkHover: {
    color: '#f1f1f1',
  },
};

export default Header;
