import styles from "./[id]/page.module.css"

// Static Meta data
export const metadata = {
  title: "Movies",
  description: "This is movies page",
};
const Movie = () => {
  return <div className={styles.title}>Movies page</div>;
};

export default Movie;
