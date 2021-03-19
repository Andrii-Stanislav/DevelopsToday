import React, { ReactElement } from 'react';
import Head from 'next/head';
import styles from './Layout.module.css';

interface LayoutProps {
  header: ReactElement,
  children: ReactElement | ReactElement[]
}

export default function Layout({ header, children }: LayoutProps): React.ReactElement{
  return (
    <div>
      <Head>
        <title>Awesome Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>{header}</header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
