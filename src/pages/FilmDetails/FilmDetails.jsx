import { FilmDetailsNav } from '../../components/FilmDetailsNav/FilmDetailsNav.jsx'
import { Outlet } from "react-router-dom"

export const FilmDetails = () => {
    return <>
        <FilmDetailsNav />
        <Outlet />
    </>
}