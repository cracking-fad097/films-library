import { useState, useEffect } from "react"
import { FilmDetailsNav } from '../../components/FilmDetailsNav/FilmDetailsNav.jsx'
import { Outlet, useParams } from "react-router-dom"
import { getById } from '../../helpers/services.js'
import noImage from '../../assets/no-image.jpg'

export const FilmDetails = () => {
    const {id} = useParams()
    const [movie, setMovie] = useState(null)
    useEffect(() => {
        getById(id).then((data) => {setMovie(data)})
    }, [])

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
        <FilmDetailsNav />
        <Outlet />
    </>
}