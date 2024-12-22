import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CreatePost from "./components/Createpost";
import EditPost from "./components/Editpost";
import Post from "./components/Post";
import Header from "./components/header";  // Import the Header component

function App() {
  return (
    <Router>
      <Header />  {/* Add the Header component here */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/edit/:id" element={<EditPost />} />
      </Routes>
    </Router>
  );
}

export default App;
