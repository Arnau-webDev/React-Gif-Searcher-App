import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import { LittleGiphyIcon } from './components/LittleGiphyIcon';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(["Marvel"]);

    return (
        <>  
            <LittleGiphyIcon />
            <AddCategory setCategories= { setCategories }/>
            <hr />

            <ol>{ categories.map( (element) => <GifGrid key={ element } category={ element }/>) }</ol>
        </>
    );
};

export default GifExpertApp;

