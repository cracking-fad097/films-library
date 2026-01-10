import filmDetails  from "../../data/filmDetails.json";
import styles from "./FilmDetailsNav.module.css"
import { Link } from 'react-router-dom'

export const FilmDetailsNav = () => {
    return (
        <ul className={styles.navList}>
            {filmDetails.map(({id, text, href}) => <li key={id}><Link to={href}>{text}</Link></li>)}
        </ul>
    )
}