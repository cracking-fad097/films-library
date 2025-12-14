import styles from './Layout.module.css'
import { Outlet } from "react-router-dom"
import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"

export const Layout = () => {
    return <>
        <Header />
        <main className={styles.content}>
            <Outlet />
        </main>
        <Footer />
    </> 
}