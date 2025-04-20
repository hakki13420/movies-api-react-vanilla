import { useState, useRef, useCallback, useEffect, useMemo } from "react"
import { fetchData } from "../services/movies"

export const useMovies = ({ search, sort }) => {
    const [movies, setMovies] = useState([])
    const previousSearch = useRef(search)
    const [loading, setLoading] = useState(false)


    const getMovies = useCallback(async (search) => {
        if (previousSearch.current === search) return
        try {
            if (search) {
                setLoading(true)
                const movies = await fetchData(search)
                setMovies(movies)
                previousSearch.current = search
            }
        } catch (error) {
            console.log("error en fetchin movies", error)
        }
        finally {
            setLoading(false)
        }
    }, [])


    const sortedMovies = useMemo(() => {
        console.log("sorted constructed")
        return sort
            ? movies.length
                ? [...movies].sort((a, b) => a.Title.localeCompare(b.Title))
                : movies
            : movies
    }, [movies, sort])


    return {
        movies: sortedMovies, getMovies, loading
    }
}
