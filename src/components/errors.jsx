import React from "react"


const Errors = ({ errors }) => {
    return (
        <>
            {
                errors.length
                    ? (<ul>
                        {errors.map((err, index) => {
                            return <li key={index}>
                                {err}
                            </li>
                        })}
                    </ul>
                    )
                    : null
            }
        </>
    )
}

export default Errors