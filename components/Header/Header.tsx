import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

import styles from './Header.module.css';

export default function Header(): React.ReactElement {
  return (
    <>
      <h1 className={styles.title}>
        <Link href={'/'}>
          <a>Amazing Blog </a>
        </Link>
      </h1>
      <button className={styles.btn} type="button" onClick={() => Router.push('/posts/new')}>
        Create new post
      </button>
    </>
  );
}
