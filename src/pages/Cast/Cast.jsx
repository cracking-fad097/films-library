import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getCast } from '../../helpers/services.js'
import styles from './Cast.module.css'
import noImage from '../../assets/no-image.jpg'

export const Cast = () => {
    const {id} = useParams()
    const [actors, setActors] = useState(null)
    useEffect(() => {
        getCast(id).then((data) => {setActors(data)})
    }, [])

    return <>
        <div>
            <ul className={styles.castList}>{actors?.data.cast.map((value) => <li className={styles.profile}>
                <p>{value.character}</p>
                <p>{value.name}</p>
                <img src={value.profile_path?`https://image.tmdb.org/t/p/w400/${value.profile_path}`:noImage} alt="" />
            </li>)}</ul>
        </div>
    </>
}