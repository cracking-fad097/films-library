import styles from './Footer.module.css'
import { BsInstagram, BsFacebook, BsTwitterX, BsLinkedin } from "react-icons/bs";

export const Footer = () => {
    return(
        <footer className={styles.footer}>
            <ul className={styles.ul}>
                <li><a href="https://www.instagram.com/" target='_blank'><BsInstagram size={40}/></a></li>
                <li><a href="https://www.facebook.com/" target='_blank'><BsFacebook size={40}/></a></li>
                <li><a href="https://www.x.com/" target='_blank'><BsTwitterX size={40}/></a></li>
                <li><a href="https://www.linkedin.com/" target='_blank'><BsLinkedin size={40}/></a></li>
            </ul>
            <p className={styles.p}>All rights reserved &copy;</p>
        </footer>
    )
}