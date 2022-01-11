import React from 'react';
import '@testing-library/jest-dom';


import { GiffGrid } from './../../components/GiffGrid';
import { shallow } from 'enzyme';
import { useFetchGiffs } from './../../hooks/useFetchGiff';
jest.mock('./../../hooks/useFetchGiff')


describe('Testing on component <GiffGrid />', () => {
    const categories = 'Los Simpson';
    const mockUseFetchGiff = useFetchGiffs;


    beforeEach(() => {
        mockUseFetchGiff.mockImplementation( () => {
            return { data: [], loading: true}
          });
    });

    test('This test must create an SnapShot the component', () => {
        
        const wapper = shallow(<GiffGrid categories={categories} />);
        expect(wapper).toMatchSnapshot();
    });

    test('This test must return information of out Custom Hooks', () => {
        const gifs = [{
            id:'ABC',
            url:'gttps://localhost/cualquier/cosa.jpg',
            title: 'cualquier cosa'
        }];
    
        mockUseFetchGiff.mockImplementation( () => {
            return { data: gifs, loading: false }
        });

        console.log(gifs.length)
        
        const wapper = shallow(<GiffGrid categories={categories} />);
        
        expect(wapper.find('GiffItems').length).toBe(gifs.length)
        // expect(wapper).toMatchSnapshot();
    })

})