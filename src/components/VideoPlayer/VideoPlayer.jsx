import Iframe from 'react-iframe'
import styles from './VideoPlayer.module.css'

export const VideoPlayer = ({value}) => {
    return <ul className={styles.videoList}>
        {value?.map(({id, key, name}) => <li key={id} loading="lazy">
            <Iframe 
                url={`https://www.youtube.com/embed/${key}?rel=0&showinfo=0&autoplay=1`}
                width="640px"
                height="320px"
                overflow="cover"   />
        </li>)}
    </ul>
}