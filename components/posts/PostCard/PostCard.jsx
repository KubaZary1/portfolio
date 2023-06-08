import Image from "next/image";
import Link from "next/link";
import styles from "./PostCard.module.scss";

export default function PostCard({ post }) {
  const { title, slug, excerpt, coverImage, author, date } = post.fields;
  const coverImageUrl = `https:${coverImage.fields.file.url}`;
  const authorImageUrl = `https:${author.fields.picture.fields.file.url}`;

  return (
    <div className={styles.card}>
      <Link className={styles.link} href={`/posts/${slug}`}>
        <div className={styles.wrapper}>
          <div className={styles.imageHolder}>
            <Image
              alt={`Cover image for ${title}`}
              src={coverImageUrl}
              className={styles.coverImage}
              width={1920}
              height={1080}
            />
          </div>
          <div>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.date}>
              {new Date(Date.parse(date)).toLocaleDateString("en-US")}
            </div>
            <p className={styles.excerpt}>{excerpt}</p>
          </div>
          <div className={styles.authorSection}>
            <Image
              src={authorImageUrl}
              width={40}
              height={40}
              alt={`${author.fields.name}'s picture`}
            />
            {author.fields.name}
          </div>
        </div>
      </Link>
    </div>
  );
}
