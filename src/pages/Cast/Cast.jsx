import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchCast } from 'services/API';
import { nanoid } from 'nanoid';
import placeholderImage from '../../images/placeholderImage.png';
import styles from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchCast(movieId, setCast).catch(console.error);
  }, [movieId]);

  return (
    <section>
      {cast.length > 0 ? (
        <ul>
          {cast.map(({ character, name, profile_path }) => {
            return (
              <li className={styles.listItem} key={nanoid()}>
                {profile_path ? (
                  <img
                    className={styles.image}
                    src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                    alt={`${name}`}
                  />
                ) : (
                  <img
                    className={styles.image}
                    src={placeholderImage}
                    alt={'Placeholder'}
                  />
                )}
                <div>
                  <h4 className={styles.listName}>{name}</h4>
                  {character ?? <p>{`as ${character}`}</p>}
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Sorry, the cast is not available.</p>
      )}
    </section>
  );
};

export default Cast;
