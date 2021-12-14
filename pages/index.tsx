// pages/index.tsx

import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { PrismaClient } from '@prisma/client';

// Import the generated Lists API from Keystone
import { query } from '.keystone/api';

// Home receives a `posts` prop from `getStaticProps` below
export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <main style={{margin: "3rem"}}>
      <h1>Hello World! 👋🏻 </h1>
      <ul>
        {/* Render each post with a link to the content page */}
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/post/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      </main>
    </div>
  )
}

// Here we use the Lists API to load all the posts we want to display
// The return of this function is provided to the `Home` component
export async function getStaticProps() {
  const prisma = new PrismaClient();
  const posts = await prisma.post.findMany();
  return { props: { posts } };
}
