import { useState } from "react"
import { useEffect } from "react"
import { getByName } from "../../helpers/services"
import styles from './Movie.module.css'
import noImage from '../../assets/no-image.jpg'
import { FilmList } from "../../components/FilmList/FilmList"

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
        <form onSubmit={handleFormSubmit}>
            <input type="text" placeholder='Search film' value={name} onChange={handleInputChange}/>
            <button type="submit">Search</button>
        </form>
        <FilmList movies={movie} />
    </>
}