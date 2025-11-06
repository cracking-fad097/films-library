import styles from './Header.module.css'
import { Navigation } from '../Navigation/Navigation.jsx'

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src="#" alt="..." />
            </div>
            <nav className={styles.navigation}>
                <Navigation />
            </nav>
        </header>
    )
}