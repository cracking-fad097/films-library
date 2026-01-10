import { useState } from "react"
import { useEffect } from "react"
import { getByName } from "../../helpers/services"
import styles from './Movie.module.css'
import noImage from '../../assets/no-image.jpg'
import { FilmList } from "../../components/FilmList/FilmList"
import { FaSearch } from "react-icons/fa";

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

    return <>
        <form onSubmit={handleFormSubmit} className={styles.search}>
            <input type="text" className={styles.movieName} placeholder='Search film' value={name} onChange={handleInputChange}/>
            <button type="submit" className={styles.searchButton}><FaSearch /></button>
        </form>
        <FilmList movies={movie?.data.results} />
    </>
}