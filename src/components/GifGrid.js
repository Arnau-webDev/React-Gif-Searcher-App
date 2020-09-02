import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
import { EmptyGifGridItem } from './EmptyGifGridItem';

export const GifGrid = ({ category }) => {

    // const categoriesAlreadySearched = document.querySelectorAll("h3");

    //  categoriesAlreadySearched.forEach((element) => {
    //      console.log(element.innerHTML)
    //     if(element.innerHTML.toUpperCase() === category.trim().toUpperCase() ){
    //         return <></>
    //     }
        
    //  }); 

    const { data:images, loading, dataLength } = useFetchGifs( category );

    return (
        <div>
            <h3 className="animate__animated animate__fadeIn">{ category }</h3>
            
            { loading && <p className="animate__animated animate__flash">Loading...</p> }
            { dataLength < 1 && loading === false && <EmptyGifGridItem category={ category } /> }

            <div className="card-grid">
                { images.map(( img ) => <GifGridItem key={ img.id } img={ img } /> )}
            </div>
        </div>
    )
}
