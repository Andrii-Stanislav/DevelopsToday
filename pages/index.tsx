import React from 'react';
import { useEffect } from 'react';
import { NextPageContext } from 'next';
import { useDispatch, useSelector } from 'react-redux';

import actions from '../redux/blog-actions';
import selectors from '../redux/blog-selectors';
import { getAllPosts } from '../services/apiServices';

import Post from '../components/Post';

import PostProps from '../interfaces/Post';
interface PostsPageProps {
  posts: PostProps[];
}

export default function Home({ posts: serverPosts }: PostsPageProps): React.ReactElement {
  const posts = useSelector(selectors.getPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    async function load() {
      const posts = await getAllPosts();
      dispatch(actions.fetchPosts(posts));
    }

    if (!serverPosts) {
      load();
    } else {
      dispatch(actions.fetchPosts(serverPosts));
    }
  }, []);

  if (!posts) {
    return <p>Loading ...</p>;
  }

  return (
    <>
      <h2>All Posts</h2>
      <ul>{posts ? posts.map(post => <Post key={post.id} post={post} />) : <></>}</ul>
    </>
  );
}

Home.getInitialProps = async ({ req }: NextPageContext) => {
  if (!req) {
    return { posts: null };
  }

  return {
    posts: await getAllPosts(),
  };
};
