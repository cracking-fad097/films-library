import styles from './FilmList.module.css'
import { FilmListItem } from '../FilmListItem/FilmListItem'

export const FilmList = ({movies}) => {
    return(
        <ul className={styles.filmList}>
            {movies?.map(({id, title, vote_average, poster_path}) => <FilmListItem key={id} id={id} title={title} vote_average={vote_average} poster_path={poster_path}/> )}
        </ul>
    )
}