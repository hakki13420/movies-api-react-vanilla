import React from "react"

export function NoMovies() {
    return (
        <h3 style={{ textAlign: "center", width: "100%" }}>No movies</h3>
    )
}

export function ListMovies({ movies }) {
    return (
        <div className="movies">
            {
                movies.map(el => {
                    return <article key={el.imdbID}>
                        <h2>{el.Title}</h2>
                        <img src={el.Poster} alt={el.imdbID} />
                        <div className="meta">
                            <h3>{el.Type}</h3>
                            <h3>{el.Year}</h3>
                        </div>
                    </article>
                })
            }

        </div>
    )
}

export function Movies({ movies }) {
    const hasMovies = movies?.length

    return (
        <>
            {
                hasMovies
                    ? <ListMovies movies={movies} />
                    : <NoMovies />
            }
        </>
    )
}
