import { client } from "@/lib/contentful/client";
import PostCard from "../../components/posts/PostCard/PostCard";
import styles from "./posts.module.scss";

async function getData() {
  const response = await client.getEntries({ content_type: "post" });
  return response.items;
}

const Posts = async () => {
  const posts = await getData();
  return (
    <>
      <section className={styles.container}>
        {posts.map((post) => {
          return <PostCard key={post.fields.slug} post={post} />;
        })}
      </section>
    </>
  );
};

export default Posts;
