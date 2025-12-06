import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getTrailers } from '../../helpers/services.js'
import { VideoPlayer } from "../../components/VideoPlayer/VideoPlayer.jsx"

export const Trailer = () => {
    const {id} = useParams()
    const [trailer, setTrailer] = useState(null)
    useEffect(() => {
        getTrailers(id).then((data) => {setTrailer(data)})
    }, [])
    console.log(trailer)
    return <>
        Trailer
        <VideoPlayer value={trailer?.data.results}/>
    </>
}