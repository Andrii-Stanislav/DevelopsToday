import React from 'react';
import Link from 'next/link';

import styles from './Post.module.css';

import PostInterfaces from '../../interfaces/Post';
interface PostProps {
  post: PostInterfaces;
}

export default function Post({ post }: PostProps): React.ReactElement {
  return (
    <li className={styles.li}>
      <Link href={`/posts/${post.id}`}>
        <a className={styles.a}>{post.title}</a>
      </Link>
    </li>
  );
}
