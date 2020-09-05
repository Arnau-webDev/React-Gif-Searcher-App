import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import { LittleGiphyIcon } from './components/LittleGiphyIcon';

const GifExpertApp = ({ defaultCategories = ['Marvel'] }) => {
	const [categories, setCategories] = useState(defaultCategories);

	return (
		<>
			<LittleGiphyIcon />
			<AddCategory setCategories={setCategories} categories={categories} />

			<ol>
				{categories.map((element) => (
					<GifGrid key={element} category={element} />
				))}
			</ol>
		</>
	);
};

export default GifExpertApp;
