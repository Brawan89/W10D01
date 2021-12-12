import styles from "../../styles/Home.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: { posts: data },
  };
};

const Posts = ({ posts }) => {
  return (
    <>
      <h1 className={styles.title}>posts</h1>
      {posts.map((post) => (
        <Link href={`/posts/${post.id}`}>
          <div className={styles.posts}>
            <h3 className={styles.tite} >{post.title}</h3>
            <p>{post.body}</p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Posts;
