import navigation from '../../data/navigation.json'
import { Link } from 'react-router-dom'

export const Navigation = () => {
    return (
        <ul>
            {navigation.map(({id, text, href}) => <li key={id}><Link to={href}>{text}</Link></li>)}
        </ul>
    )
}