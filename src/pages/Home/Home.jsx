import { useState, useEffect } from "react"
import { getPopularMovies } from "../../helpers/services"
import { FilmList } from "../../components/FilmList/FilmList.jsx"
import styles from './Home.module.css'
import noImage from '../../assets/no-image.jpg'

export const Home = () => {
    const [popularMovies, setPopularMovies] = useState(null)
    useEffect(() => {
        getPopularMovies(1).then((data) => {setPopularMovies(data)})
    }, [])

    return <>
        <FilmList movies={popularMovies} />
    </>
}

// useEffect(() => {
//     if(name !== '') {
//       getImages(name, pageNumber).then((data) => {
//         if(data?.hits.length !== 0) {
//           setIsShowButton(true)
//         }
//         setResponse((prev) => [...prev, ...data.hits])})
//     }
//   },[name, pageNumber])