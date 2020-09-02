import { useState, useEffect } from 'react';
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true,
        dataLength: 0,
        categoriesSubmitted: [],
    });

    useEffect( () => {
        getGifs (category)
            .then((imgs) => { setTimeout(() => {
                setState({
                    data: imgs,
                    loading: false,
                    dataLength: imgs.length
                });
            }, 550)});
    }, [ category ]);

    return state;
}
