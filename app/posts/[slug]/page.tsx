import { client } from "@/lib/contentful/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import styles from "./Post.module.scss";
import Image from "next/image";

interface PostInterface {
  fields: {
    title: string;
    slug: string;
    author: any;
    excerpt: string;
    coverImage: any;
    content: any;
    date: string;
  };
}

const getPosts = async (slug: string) => {
  const response = await client.getEntries({
    content_type: 'post',
    'fields.slug': slug
  });

  if (response?.items?.length > 0) {
    return response.items[0].fields as PostInterface['fields'];
  }

  throw new Error(`No post found with slug '${slug}'`);
};

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  try {
    const post: PostInterface['fields'] = await getPosts(slug);

    const content = documentToReactComponents(post.content);
    const authorImageUrl = `https:${post.author.fields.picture.fields.file.url}`;
    const coverImageUrl = `https:${post.coverImage.fields.file.url}`;

    return (
      <div className={styles.articleWrapper}>
        <article className={styles.article}>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.postInfo}>
            <div className={styles.authorInfo}>
              <Image
                src={authorImageUrl}
                width={40}
                height={40}
                alt={`${post.author.fields.name}'s picture`}
              />
              <p className={styles.author}>{post.author.fields.name}</p>
            </div>
            <p className={styles.date}>{new Date(Date.parse(post.date)).toLocaleDateString("en-US")}</p>
          </div>
          <div className={styles.imageHolder}><Image className={styles.coverImage} src={coverImageUrl} alt="cover" 
          width={1920}
          height={1080} /></div>
          <div className={styles.content}>
            {[content]}
          </div>
        </article>
      </div>
    );
  } catch (error:any) {
    console.error(error);
    //TODO: Handle the error appropriately, e.g., show an error page
    return <div>Error: {error.message}</div>;
  }
}