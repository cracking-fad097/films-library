import Iframe from 'react-iframe'

export const VideoPlayer = ({value}) => {
    return <ul>
        {value?.map(({id, key, name}) => <li key={id} loading="lazy">
            <Iframe 
                url={`https://www.youtube.com/embed/${key}?rel=0&showinfo=0&autoplay=1`}
                width="640px"
                height="320px"
                overflow="cover"   />
        </li>)}
    </ul>
}