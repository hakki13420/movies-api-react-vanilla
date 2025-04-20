const URL_MOVIES = import.meta.env.VITE_MOVIE_API_URL
const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchData = (search) => {
    return search && fetch(`${URL_MOVIES}${API_KEY}&s=${search}`)
        .then(res => res.json())
        .then(res => {
            return res.Search
        })
}

