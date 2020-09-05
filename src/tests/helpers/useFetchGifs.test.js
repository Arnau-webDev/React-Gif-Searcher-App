import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas custom Hook useFetchGifs', () => {
	test('Deebe retornar el estado inicial del custom Hook', async () => {
		const { result, waitForNextUpdate } = renderHook(() =>
			useFetchGifs('One Punch')
		);
		const { data, loading, dataLength } = result.current;
		await waitForNextUpdate();

		expect(data).toEqual([]);
		expect(loading).toBe(true);
		expect(dataLength).toBe(0);
	});

	test('Debe de retornar un array de imagenes y loading en false', async () => {
		const { result, waitForNextUpdate } = renderHook(() =>
			useFetchGifs('One Punch')
		);
		await waitForNextUpdate();
		const { data, loading, dataLength } = result.current;

		expect(loading).toBe(false);
		expect(dataLength).toBe(10);
	});
});
