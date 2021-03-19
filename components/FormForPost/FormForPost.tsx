import React, { useState } from 'react';
import styles from './FormForPost.module.css';

import Button from '../Button';

interface FormProps {
  btnText: string;
  submitFunction: (postObj: unknown) => Promise<void>;
  initialTitle?: string;
  initialPost?: string;
}

export default function FormForPost({
  btnText,
  submitFunction,
  initialTitle,
  initialPost,
}: FormProps): React.ReactElement {
  const [title, setTitle] = useState(initialTitle ?? '');
  const [post, setPost] = useState(initialPost ?? '');

  return (
    <form onSubmit={e => e.preventDefault()}>
      <label className={styles.label}>
        <span>Title:</span>
        <input
          className={styles.input}
          name="title"
          type="text"
          value={title}
          onChange={e => setTitle(e.currentTarget.value)}
          required
        />
      </label>
      <label className={styles.label}>
        <span>Your post:</span>
        <textarea
          className={styles.textarea}
          name="body"
          value={post}
          onChange={e => setPost(e.currentTarget.value)}
          required
        />
      </label>
      <Button type="button" onClick={() => submitFunction({ body: post, title })}>
        {' '}
        {btnText}{' '}
      </Button>
    </form>
  );
}
