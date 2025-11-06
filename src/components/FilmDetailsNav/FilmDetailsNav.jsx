import filmDetails  from "../../data/filmDetails.json";
import { Link } from 'react-router-dom'

export const FilmDetailsNav = () => {
    return (
        <ul>
            {filmDetails.map(({id, text, href}) => <li key={id}><Link to={href}>{text}</Link></li>)}
        </ul>
    )
}