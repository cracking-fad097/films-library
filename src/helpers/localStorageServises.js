export const getFromLocalStorage = (key) => {
    const data = JSON.parse(localStorage.getItem(key))??[]
    return data
}

export const toggleLocalStorage = (key, el) => {
    const data = getFromLocalStorage(key)
    const isInStorage = data.find((value) => value.id === el.id)
    if (isInStorage) {
        const filteredArr = data.filter((film) => film.id !== el.id)
        localStorage.setItem(key, JSON.stringify(filteredArr))
        return false
    }
    localStorage.setItem(key, JSON.stringify([...data, el]))
    return true
}