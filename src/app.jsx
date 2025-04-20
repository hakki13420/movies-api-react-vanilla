import React, { useCallback, useEffect, useState } from "react"

import "./app.css"
import { useSearch } from "./hooks/useSearch"
import { Movies } from "./components/movies"
import Errors from "./components/errors"
import { useMovies } from "./hooks/useMovies"
import debounce from "just-debounce-it"


const App = () => {
    const { search, setSearch, errors } = useSearch()
    const [sort, setSort] = useState(false)
    const { movies, getMovies, loading } = useMovies({ search, sort })

    const getDebounceMovies = useCallback(debounce((val) => {
        getMovies(val)
    }, 2000)
        , [])

    const handlChange = (e) => {
        setSearch(e.target.value)
        getDebounceMovies(e.target.value)
    }

    const submitForm = async (e) => {
        e.preventDefault()
        getMovies(search)
    }

    const handlClick = () => {
        setSort(!sort)
    }

    return (
        <div className="container">
            <header>
                <form onSubmit={submitForm}>
                    <label htmlFor="">Movies</label>
                    <input name="search" type="text" value={search} onChange={handlChange} placeholder="movie..." />
                    <input type="checkbox" onClick={handlClick} value={sort} />
                    <button>Search</button>
                </form>
            </header>
            <main>
                {
                    loading
                        ? <h2>loading....</h2>
                        : <>
                            <Errors errors={errors} />
                            <Movies movies={movies} />
                        </>
                }

            </main>
        </div>
    )
}


export default App