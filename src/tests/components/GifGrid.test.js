import React from 'react';
import '@testing-library/jest-dom';

import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
const { shallow } = require('enzyme');

jest.mock('../../hooks/useFetchGifs');

describe('Pruebas <GifGrid />', () => {
	const category = 'Goku';

	test('Debe mostrar el contenido correctamente', () => {
		useFetchGifs.mockReturnValue({
			data: [],
			loading: true,
			dataLength: 0,
		});

		const wrapper = shallow(<GifGrid category={category} />);

		expect(wrapper).toMatchSnapshot();
	});

	test('Debe de mostrar los items despues de la consulta fetch', () => {
		const gifs = [
			{
				id: 'ABC',
				title: 'Some title',
				url: 'https://localhost/myImgae.png',
			},
		];

		useFetchGifs.mockReturnValue({
			data: gifs,
			loading: false,
			dataLength: gifs.length,
		});

		const wrapper = shallow(<GifGrid category={category} />);

		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('p').exists()).toBe(false);
		expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
	});
});
