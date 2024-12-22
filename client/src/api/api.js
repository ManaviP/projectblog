import axios from "axios";

const API_URL = "http://localhost:5000/api/posts";

export const getPosts = async () => axios.get(API_URL);
export const getPost = async (id) => axios.get(`${API_URL}/${id}`);
export const createPost = async (post) => axios.post(API_URL, post);
export const updatePost = async (id, post) => axios.put(`${API_URL}/${id}`, post);
export const deletePost = async (id) => axios.delete(`${API_URL}/${id}`);
