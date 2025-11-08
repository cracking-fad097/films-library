import axios from "axios";

const API_KEY = 'a138d9c2ec5bee6878c1acf4eaa23bdd'
export const getPopularMovies = async(page) => {
    const searchParams = new URLSearchParams({
        api_key: API_KEY,
        page 
    })
    const url = `https://api.themoviedb.org/3/trending/movie/week?${searchParams}`;
    const response = await axios.get(url)
    return response
}

export const getById = async(id) => {
    const searchParams = new URLSearchParams({
        api_key: API_KEY
    })
    const url = `https://api.themoviedb.org/3/movie/${id}?${searchParams}`;
    const response = await axios.get(url)
    return response
}

export const getCast = async(id) => {
    const searchParams = new URLSearchParams({
        api_key: API_KEY,
    })
    const url = `https://api.themoviedb.org/3/movie/${id}/credits?${searchParams}`;
    const response = await axios.get(url)
    return response
}

export const getReview = async(id) => {
    const searchParams = new URLSearchParams({
        api_key: API_KEY,
    })
    const url = `https://api.themoviedb.org/3/movie/${id}/reviews?${searchParams}`;
    const response = await axios.get(url)
    return response
}

export const getByName = async(name, page) => {
    const searchParams = new URLSearchParams({
        api_key: API_KEY,
        query: name,
        page
    })
    const url = `https://api.themoviedb.org/3/search/movie?${searchParams}`;
    const response = await axios.get(url)
    return response
}

export const getTrailers = async(id) => {
    const searchParams = new URLSearchParams({
        api_key: API_KEY,
        query: name,
        page
    })
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?${searchParams}`;
    const response = await axios.get(url)
    return response
}