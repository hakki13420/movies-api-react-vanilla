import { useEffect, useState } from "react"


export const useSearch = () => {
    const [search, setSearch] = useState("")
    const [errors, setErrors] = useState([])


    useEffect(() => {
        if ((/^\s+/).test(search)) setErrors(errors.concat("pas des espaces dans le titre"))

    }, [search])

    useEffect(() => {
        errors.length && setTimeout(() => {
            setErrors([])
            setSearch("")
        }, 3000)
    }, [errors])



    return {
        search, setSearch, errors
    }

}
