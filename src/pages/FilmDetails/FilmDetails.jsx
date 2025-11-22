import { useState, useEffect } from "react"
import { FilmDetailsNav } from '../../components/FilmDetailsNav/FilmDetailsNav.jsx'
import { Outlet, useParams } from "react-router-dom"
import { getById } from '../../helpers/services.js'

export const FilmDetails = () => {
    const {id} = useParams()
    const [movie, setMovie] = useState(null)
    useEffect(() => {
        getById(id).then((data) => {setMovie(data)})
    }, [])
    console.log(movie)

    return <>
        
        <FilmDetailsNav />
        <Outlet />
    </>
}