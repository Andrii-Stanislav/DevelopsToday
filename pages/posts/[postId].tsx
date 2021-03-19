import React from 'react';
import { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import styled from 'styled-components'

import { getOnePost, deletePost, updatePost } from '../../services/apiServices';

import PostInterfaces from '../../interfaces/Post';
interface PostProps {
  serverPost: PostInterfaces
}

import Button from '../../components/Button'
import FormForPost from '../../components/FormForPost';
import Comments from '../../components/Comments'

const BtnBox = styled.div`
  display: flex;
`

const StyledPost = styled.p`
  width: fit-content;
  padding: 10px;
  background-color: #eeeeee;
  color: grey;
`

export default function Post({ serverPost }:PostProps): React.ReactElement {
  const [post, setPost] = useState(serverPost);
  const [editMode, setEditMode] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function load() {
      const post: PostInterfaces = await getOnePost(router.query.postId);
      setPost(post);
    }

    if (!serverPost) {
      load();
    }
  }, []);

  const heandleDeletePost = async () => {
    await deletePost(post.id);
    Router.push('/');
  };

  const heandleUpdatePost = async post => {
    const postObj = {
      id: router.query.postId,
      title: post.title,
      body: post.body
    }
    await updatePost(postObj)
    Router.push('/') 
  };

  if (!post) {
    return <p>Loading ...</p>;
  }

  return (
    <>
      <BtnBox>
      <Button onClick={() => Router.push('/')}>Bo to home</Button>
      <Button type="button" onClick={heandleDeletePost}>
        Delete post
      </Button>
      <Button type="button" onClick={() => setEditMode(prevMode => !prevMode)}>
        {!editMode ? 'Update post' : 'Cancel edit post'}
      </Button>
      </BtnBox>

      {editMode ? (
        <FormForPost
          btnText="Edit post"
          submitFunction={heandleUpdatePost}
          initialTitle={post.title}
          initialPost={post.body}
        />
      ) : (
        <>
          <h3>{post.title}</h3>
            <StyledPost>{post.body} </StyledPost>
            <Comments comments={post.comments} postId={post.id} />
        </>
      )}
    </>
  );
}

Post.getInitialProps = async ({ query, req }) => {
  if (!req) {
    return { post: null };
  }

  return {
    serverPost: await getOnePost(query.postId),
  };
};
