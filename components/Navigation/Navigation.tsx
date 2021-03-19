import React from 'react';
import Link from 'next/link';

export default function Navigation(): React.ReactElement {
  return (
    <nav>
      <Link href={'/'}>
        <a>Home</a>
      </Link>
      <Link href={'/posts'}>
        <a>Posts</a>
      </Link>
    </nav>
  );
}
