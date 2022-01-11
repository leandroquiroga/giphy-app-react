import React from 'react';
import { shallow } from 'enzyme';
import GifExpertApp from './../GifExpertApp';


describe('Testing the component <GifExpertApp />', () => {
    test('This test must equal with snapshot', () => {
        const wapper = shallow(<GifExpertApp />);
        expect(wapper).toMatchSnapshot();
    });

    test('This test must return an snapshot and the longitude oh the component', () => {
        const categories = ['Marvel'];
        const wapper = shallow(<GifExpertApp defaultCategories={categories} />);

        expect(wapper).toMatchSnapshot();
        expect(wapper.find('GiffListItems').length).toBe(categories.length)

    }) 
})