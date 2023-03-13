import Link from "next/link";
import { client } from "../../../lib/contentful/client";

export default function Blog({ posts }) {
  console.log(posts);
  
  return (
    <>
      <main>
        BLOG
        <ul className="flex-col">
          {posts.map((post, i) => <Link href={`/blog/${post.fields.slug}`} key={i}>
            <div>
              <h3>{post.fields.title}</h3>
              <p>{post.fields.description}</p>
            </div>
          </Link>)}
        </ul>
      </main>
    </>
  )
}

export const getStaticProps = async () => {
  const res = await client.getEntries({ content_type: 'post' });

  console.log(res);

  return {
    props: {
      posts: res.items,
      revalidate: 60
    }
  }
};