const Post = require("../models/Post");
const generateSummary = require("../utilis/aiSummary");  // Import the AI summary function

// Create a new post
exports.createPost = async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ error: "Title and content are required" });
    }

 

    // Create and save the new post
    const newPost = new Post({ title, content, summary });
   

    // Send back the new post
    res.status(201).json(newPost);
  } catch (error) {
    console.error("Error creating post:", error.message);
    res.status(500).json({ error: "Failed to create post" });
  }
};

// Update a specific post
exports.updatePost = async (req, res) => {
    try {
      const { title, content } = req.body;
  
      if (!title || !content) {
        return res.status(400).json({ error: "Title and content are required" });
      }
  
      // Await the summary generation
      const summary = await generateSummary(content);  // Ensure we await the result here
  
      const updatedPost = await Post.findByIdAndUpdate(
        req.params.id,
        { title, content, summary },
        { new: true }
      );
  
      if (!updatedPost) {
        return res.status(404).json({ error: "Post not found" });
      }
  
      res.status(200).json(updatedPost);
    } catch (error) {
      console.error("Error updating post:", error.message);
      res.status(500).json({ error: "Failed to update post" });
    }
  };
  
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    res.status(500).json({ error: "Failed to fetch posts" });
  }
};

exports.getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.status(200).json(post);
  } catch (error) {
    console.error("Error fetching post:", error.message);
    res.status(500).json({ error: "Failed to fetch post" });
  }
};



exports.deletePost = async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);

    if (!deletedPost) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    console.error("Error deleting post:", error.message);
    res.status(500).json({ error: "Failed to delete post" });
  }
};
