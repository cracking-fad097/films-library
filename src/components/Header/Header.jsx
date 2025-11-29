import styles from './Header.module.css'
import { Navigation } from '../Navigation/Navigation.jsx'

export const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.navigation}>
                <Navigation />
            </nav>
        </header>
    )
}