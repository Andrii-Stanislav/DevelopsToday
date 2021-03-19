const fetchPosts = posts => ({
  type: 'posts/fetch',
  payload: posts,
});

const addPost = post => ({
  type: 'post/add',
  payload: post,
});

const actions = {
  fetchPosts,
  addPost,
};
export default actions;
