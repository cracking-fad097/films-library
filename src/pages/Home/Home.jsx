import { useState, useEffect } from "react"
import { getPopularMovies } from "../../helpers/services"
import { FilmList } from "../../components/FilmList/FilmList.jsx"
import styles from './Home.module.css'
import noImage from '../../assets/no-image.jpg'
import PaginatedItems from "../../components/Pagination/Pagination.jsx"
import { useSearchParams } from "react-router-dom"

export const Home = () => {
    const [popularMovies, setPopularMovies] = useState(null)
    const [searchParams, setSearchParams ] = useSearchParams()
    const pageNumber = Number(searchParams.get('page') ?? 1)
    useEffect(() => {
        getPopularMovies(pageNumber).then((data) => {setPopularMovies(data)})
    }, [pageNumber])
    
    return <>
        <FilmList movies={popularMovies?.data.results} />
        <PaginatedItems totalPages={popularMovies?.data.total_pages} currentPage={pageNumber - 1} setSearchParams={setSearchParams}/>
    </>
}