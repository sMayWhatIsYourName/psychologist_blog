import { client } from "../../../lib/contentful/client";

export default function BlogItem({ post }) {
  if (!post) {
    return null;
  }

  return (
    <>
      <main>
        <div>
          <h3>{post.fields.title}</h3>
          <p>{post.fields.description}</p>
        </div>
      </main>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const response = await client.getEntries({
    content_type: "post",
    "fields.slug": slug,
  });

  if (!response?.items?.length) {
    return {
      redirect: {
        destination: "/blog",
        permanent: false,
      },
    };
  }

  return {
    props: {
      post: response?.items?.[0],
    },
    revalidate: 60,
  };
};

export const getStaticPaths = async () => {
  const res = await client.getEntries({ content_type: "post" });
  
  const paths = res.items.map((item) => ({
    params: { slug: item.fields.slug },
  }));

  return {
    paths,
    fallback: true,
  };
};
