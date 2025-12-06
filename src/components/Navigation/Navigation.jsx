import navigation from '../../data/navigation.json'
import { Link } from 'react-router-dom'
import tmdb from '../../assets/tmdb.svg'

export const Navigation = () => {
    return (
        <ul>
            <li><Link to="/"><img src={tmdb} alt="..." width={300} /></Link></li>
            {navigation.map(({id, text, href}) => <li key={id}><Link to={href}>{text}</Link></li>)}
        </ul>
    )
}