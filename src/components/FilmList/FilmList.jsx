import styles from './FilmList.module.css'
import noImage from '../../assets/no-image.jpg'
import { Link } from 'react-router-dom'

export const FilmList = ({movies}) => {
    return(
        <ul className={styles.filmList}>
            {movies?.data.results.map(({id, title, vote_average, poster_path}) => <li key={id} className={styles.filmData}>
                <Link to={`/FilmDetails/${id}`}>
                    <div className={styles.filmImage}>
                        <img src={poster_path?`https://image.tmdb.org/t/p/w400/${poster_path}`:noImage} alt="..." />
                    </div>
                    <p className={styles.filmTitle}>{title}</p>
                    <p className={styles.filmRating}>{vote_average}</p>
                </Link>
            </li>)}
        </ul>
    )
}