import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getReview } from '../../helpers/services.js'
import styles from './Review.module.css'

export const Review = () => {
    const {id} = useParams()
    const [review, setReview] = useState(null)
    useEffect(() => {
        getReview(id).then((data) => {setReview(data)})
    }, [])
    return <>
        <div>
            <ul>{review?.data.results.map((value) => <li className={styles.review}>
                <p>{value.author}</p>
                <p>{value.content}</p>
            </li>)}</ul>
        </div>
    </>
}