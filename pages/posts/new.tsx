import React from 'react';
import Router from 'next/router';

import FormForPost from '../../components/FormForPost';

import { createPost } from '../../services/apiServices';

export default function NewPost(): React.ReactElement {
  const heandleCreatePost = async postObj => {
    await createPost(postObj);
    Router.push('/');
  };

  return <FormForPost btnText="Create post" submitFunction={heandleCreatePost} />;
}
