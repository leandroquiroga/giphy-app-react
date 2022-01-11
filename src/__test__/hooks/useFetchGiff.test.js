import { renderHook } from '@testing-library/react-hooks';
import { useFetchGiffs } from './../../hooks/useFetchGiff';


describe('Testing on custom hooks', () => {
    test('This test must return the state inital', async () => {
        const {result, waitForNextUpdate} = renderHook(() => useFetchGiffs('Marvel'));
        const { data, loading } = result.current;
        // console.log(data, loading);
        await waitForNextUpdate({timeout: 3000})
        expect(loading).toBe(true);
        expect(data).toEqual([])
    });

    test('This test must return an array of images and the loading must be false', async() => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGiffs('Marvel'));

        await waitForNextUpdate({timeout: 3000});
        const { data, loading } = result.current;

        expect(data.length).toBe(50);
        expect(loading).toBe(false)
    })
});