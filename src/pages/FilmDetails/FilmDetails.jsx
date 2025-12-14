import { useState, useEffect } from "react"
import { FilmDetailsNav } from '../../components/FilmDetailsNav/FilmDetailsNav.jsx'
import { Outlet, useParams } from "react-router-dom"
import { getById } from '../../helpers/services.js'
import { getFromLocalStorage, toggleLocalStorage } from "../../helpers/localStorageServises.js"
import noImage from '../../assets/no-image.jpg'
import styles from './FilmDetails.module.css'

export const FilmDetails = () => {
    const {id} = useParams()
    const [movie, setMovie] = useState(null)
    const [button, setButton] = useState(false)
    useEffect(() => {
        getById(id).then((data) => {setMovie(data)})
    }, [])
    useEffect(() => {
        const response = getFromLocalStorage('favouriteFilm')
        const isInStorage = response.find((value) => value.id === movie?.data.id)
        if(isInStorage) {
            setButton(true)
        } else {
            setButton(false)
        }
    }, [movie])

    const handleButton = () => {
        const response = toggleLocalStorage('favouriteFilm', {id: movie?.data.id, title: movie?.data.title, vote_average: movie?.data.vote_average, poster_path: movie?.data.poster_path})
        setButton(response)
    }

     return <>
        <div className={styles.details}>
            <img className={styles.img} src={movie?.data.poster_path?`https://image.tmdb.org/t/p/w400/${movie?.data.poster_path}`:noImage} alt="" />
            <div className={styles.description}>
                <h1>{movie?.data.title}</h1>
                <p>Rating: {movie?.data.vote_average.toFixed(1)}</p>
                <ul className={styles.ul}>{movie?.data.genres.map((value) => <li>{value.name}</li>)}</ul>
                <p>Release date: {movie?.data.release_date}</p>
                <p>Duration: {movie?.data.runtime} min</p>
                <p>Status: {movie?.data.status}</p>
                <p>{movie?.data.overview}</p>
                <p>Tag: {movie?.data.tagline}</p>
                <button type="button" onClick={handleButton}>{button?"Remove from favourite":"Add to favourite"}</button>
            </div>
        </div>
        <FilmDetailsNav />
        <Outlet />
    </>
}