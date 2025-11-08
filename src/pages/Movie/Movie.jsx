import { useState } from "react"
import { useEffect } from "react"
import { getByName } from "../../helpers/services"
import styles from './Movie.module.css'

export const Movie = () => {
    const [name, setName] = useState('')
    const [page, setPage] = useState(1)
    const [movie, setMovie] = useState(null)

    const handleInputChange = (event) => {
        const {value} = event.target
        setName(value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        getByName(name, page).then((data) => {setMovie(data)})
    }

    console.log(movie)
    return <>
        <form onSubmit={handleFormSubmit}>
            <input type="text" placeholder='Search film' value={name} onChange={handleInputChange}/>
            <button type="submit">Search</button>
        </form>
        <ul className={styles.filmList}>
            {movie?.data.results.map(({id, title, vote_average, poster_path}) => <li key={id} className={styles.filmData}>
                <div className={styles.filmImage}>
                    <img src={`https://image.tmdb.org/t/p/w400/${poster_path}`} alt="..." />
                </div>
                <p className={styles.filmTitle}>{title}</p>
                <p className={styles.filmRating}>{vote_average}</p>
            </li>)}
        </ul>
    </>
}