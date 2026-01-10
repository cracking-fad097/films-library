import noImage from '../../assets/no-image.jpg'
import { Link } from 'react-router-dom'
import styles from './FilmListItem.module.css'
let filmRating 

export const FilmListItem = ({id, vote_average, poster_path, title}) => {
    if(vote_average <= 5) {
        filmRating = styles.filmRatingRed
    }

    if(vote_average >= 5.1 && vote_average <= 7) {
        filmRating = styles.filmRatingYellow
    }

    if(vote_average >= 7.1) {
        filmRating = styles.filmRatingGreen
    }

    return(
        <li className={styles.filmData}>
            <Link to={`/FilmDetails/${id}`}>
                <div className={styles.filmImage}>
                    <img src={poster_path?`https://image.tmdb.org/t/p/w400/${poster_path}`:noImage} alt="..." />
                </div>
                <p className={styles.filmTitle}>{title}</p>
                <p className={filmRating}>{vote_average.toFixed(1)}</p>
            </Link>
        </li>)
}