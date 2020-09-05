import React from 'react';
import '@testing-library/jest-dom';

const { shallow } = require('enzyme');
const { AddCategory } = require('../../components/AddCategory');

describe('Pruebas AddCategory', () => {
	const setCategories = jest.fn();
	let value;
	let wrapper;
	let categories = [];

	beforeEach(() => {
		jest.clearAllMocks();
		value = 'Hola Mundo';
		categories = ['Marvel', 'Hola'];
		wrapper = shallow(
			<AddCategory categories={categories} setCategories={setCategories} />
		);
	});

	test('Debe mostrar el snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('No debe de hacer la petición fetch con el onSubmit', () => {
		wrapper
			.find('form')
			.simulate('submit', { target: { value }, preventDefault: () => {} });

		expect(setCategories).not.toHaveBeenCalled();
	});

	test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
		wrapper.find('input').simulate('change', { target: { value } });
		wrapper.find('form').simulate('submit', { preventDefault: () => {} });

		expect(setCategories).toHaveBeenCalled();
		expect(setCategories).toHaveBeenCalledTimes(1);
		expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

		const inputText = wrapper.find('input').props().value;
		expect(inputText).toBe('');
	});
});
