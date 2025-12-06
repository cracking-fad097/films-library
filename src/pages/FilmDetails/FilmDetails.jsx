import { useState, useEffect } from "react"
import { FilmDetailsNav } from '../../components/FilmDetailsNav/FilmDetailsNav.jsx'
import { Outlet, useParams } from "react-router-dom"
import { getById } from '../../helpers/services.js'
import { getFromLocalStorage, toggleLocalStorage } from "../../helpers/localStorageServises.js"
import noImage from '../../assets/no-image.jpg'

export const FilmDetails = () => {
    const {id} = useParams()
    const [movie, setMovie] = useState(null)
    const [button, setButton] = useState(false)
    useEffect(() => {
        getById(id).then((data) => {setMovie(data)})
    }, [])

    console.log(movie)

    const handleButton = () => {
        const response = toggleLocalStorage('favouriteFilm', {id: movie?.data.id, title: movie?.data.title, vote_average: movie?.data.vote_average, poster_path: movie?.data.poster_path})
        setButton(response)
    }

     return <>
        <div>
            <img src={movie?.data.poster_path?`https://image.tmdb.org/t/p/w400/${movie?.data.poster_path}`:noImage} alt="" />
        </div>
        <p>{movie?.data.title}</p>
        <p>{movie?.data.vote_average}</p>
        <ul>{movie?.data.genres.map((value) => <li>{value.name}</li>)}</ul>
        <p>{movie?.data.release_date}</p>
        <p>{movie?.data.runtime} min</p>
        <p>{movie?.data.status}</p>
        <p>{movie?.data.overview}</p>
        <p>{movie?.data.tagline}</p>
        <button type="button" onClick={handleButton}>Add to favourite</button>
        <FilmDetailsNav />
        <Outlet />
    </>
}


// const handleSubmit = (value) => {
//     setName(value)
//     setIsShowButton(false)
//     setResponse([])
//   }
// ...
// return (
//     <>
//     <SearchForm handleSubmit={handleSubmit} />
//     <ul className={styles.ul}></ul>