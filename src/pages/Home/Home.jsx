import { useState } from "react"
import { useEffect } from "react"
import { getPopularMovies } from "../../helpers/services"
import { data } from "react-router-dom"
import styles from './Home.module.css'

export const Home = () => {
    const [popularMovies, setPopularMovies] = useState(null)
    useEffect(() => {
        getPopularMovies(1).then((data) => {setPopularMovies(data)})
    }, [])

    console.log(popularMovies)
    return <>
        Home
        <ul className={styles.filmList}>
            {popularMovies?.data.results.map(({id, title, vote_average, poster_path}) => <li key={id} className={styles.filmData}>
                <div className={styles.filmImage}>
                    <img src={`https://image.tmdb.org/t/p/w400/${poster_path}`} alt="..." />
                </div>
                <p className={styles.filmTitle}>{title}</p>
                <p className={styles.filmRating}>{vote_average}</p>
            </li>)}
        </ul>
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