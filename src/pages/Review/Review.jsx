import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getReview } from '../../helpers/services.js'

export const Review = () => {
    const {id} = useParams()
    const [review, setReview] = useState(null)
    useEffect(() => {
        getReview(id).then((data) => {setReview(data)})
    }, [])
    console.log(review)
    return <>
        Review
        <div>
            <ul>{review?.data.results.map((value) => <li>
                <p>{value.author}</p>
                <p>{value.content}</p>
            </li>)}</ul>
        </div>
    </>
}