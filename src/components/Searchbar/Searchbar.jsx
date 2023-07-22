import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  return (
    <form className={styles.form} onSubmit={e => onSubmit(e)}>
      <div className={styles.wrapper}>
        <input
          className={styles.input}
          key={nanoid()}
          type="text"
          name="query"
        />
        <button className={styles.button} type="submit">
          Search
        </button>
      </div>
    </form>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
