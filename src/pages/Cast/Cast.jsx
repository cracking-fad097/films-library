import { useState, useEffect } from "react"
import { FilmDetailsNav } from '../../components/FilmDetailsNav/FilmDetailsNav.jsx'
import { Outlet, useParams } from "react-router-dom"
import { getCast } from '../../helpers/services.js'

export const Cast = () => {
    const {id} = useParams()
    const [actors, setActors] = useState(null)
    useEffect(() => {
        getCast(id).then((data) => {setActors(data)})
    }, [])

    return <>
        Cast:
        <div>
            <ul>{actors?.data.cast.map((value) => <li>
                <p>{value.character}</p>
                <p>{value.name}</p>
                <img src={`https://image.tmdb.org/t/p/w400/${value.profile_path}`} alt="" />
            </li>)}</ul>
        </div>
    </>
}