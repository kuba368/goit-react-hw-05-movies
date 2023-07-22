import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Page not found</h2>
      <Link className={styles.link} to="/">
        Return to Home Page
      </Link>
    </div>
  );
};
export default NotFound;
