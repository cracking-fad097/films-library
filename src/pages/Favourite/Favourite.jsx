import { useState, useEffect } from "react"
import { getFromLocalStorage } from "../../helpers/localStorageServises.js"
import { FilmList } from "../../components/FilmList/FilmList"

export const Favourite = () => {
    const [favouriteMovies, setFavouriteMovies] = useState([])
    useEffect(() => {
        const response = getFromLocalStorage('favouriteFilm')
        setFavouriteMovies(response)
    }, [])

    return <>
        <FilmList movies={favouriteMovies} />
    </>
}