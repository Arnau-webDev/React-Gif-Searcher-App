import React from 'react'

export const EmptyGifGridItem = ({ category }) => {

    return (
        <div className="notFoundCard animate__animated animate__fadeIn">
            <p>No GIFS where found from the <span>{ category }</span> search</p>
        </div>
    )
}
