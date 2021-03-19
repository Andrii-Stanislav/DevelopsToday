import axios from 'axios';

import { NextPageContext } from 'next';
import PostProps from '../interfaces/Post';

axios.defaults.baseURL = 'https://simple-blog-api.crew.red';

const getAllPosts = async () => {
  const { data: post } = await axios.get(`/posts`);
  return post;
};

const getOnePost = async postId => {
  const { data: post } = await axios.get(`/posts/${postId}?_embed=comments`);
  return post;
};

const createPost = async postObj => {
  const { data: post } = await axios.post(`/posts`, postObj);
  return post;
};

const deletePost = async postId => {
  const response = await axios.delete(`/posts/${postId}`);
  console.log(response);
};

const updatePost = async postObj => {
  const response = await axios.put(`/posts/${postObj.id}`, {title: postObj.title, body: postObj.body});
  console.log(response);
};

const createComment = async comentObj => {
  const {data} = await axios.post(`/comments`, comentObj);
  return data; 
};

export { getAllPosts, getOnePost, createPost, deletePost, updatePost, createComment };
