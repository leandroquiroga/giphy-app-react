import { shallow } from 'enzyme';
import React from 'react';
import { AddCategories } from '../../components/AddCategories';
import '@testing-library/jest-dom'


describe('Test on component <AddCategories />', () => {
    const setCategories = jest.fn();
    
    let wapper = shallow(<AddCategories setCategories={setCategories} />);
    
    const input = wapper.find('input');
    const form = wapper.find('form')
    const value = 'Hello Word';

    beforeEach ( () => {
        jest.clearAllMocks();
        wapper = shallow(<AddCategories setCategories={setCategories} />);
    });

    test('This test must correctly show the component', () => {
        expect(wapper).toMatchSnapshot();
    });

    test('This test must detect an change on the input', () => {
        input.simulate('change', { target: { value } })
    });

    test('This test must send the information with event submit', () => {
        form.simulate('submit', { preventDefault: () => { } });
        expect(setCategories).toHaveBeenCalled();
    });

    test('This test must call the function and clear the inputValue', () => {
        input.simulate('change', { target: { value } });
        form.simulate('submit', { preventDefault: () => { } });

        expect(setCategories).toHaveBeenCalled();
        // expect(setCategories).toHaveBeenCalledTimes(2);
        // expect(setCategories).toHaveBeenCalledWith( expect.any(Function));
        // expect(wapper.find('input').prop(value)).toBe('')
        expect(input.text().trim()).toBe('');
    })
}); 