import  React from 'react';
import { shallow } from 'enzyme';
import { GiffItems } from '../../components/GiffItems';

describe('Test is on component ===> </GiffItems >', () => {
    
    // Props
    const id = 'idcomponent';
    const title = 'TitleComponent';
    const url = 'https://localhost/hola.jpg';
    const viewURL = 'View Giff'
    let wappper = shallow(
        <GiffItems
            id={id}
            title={title}
            url={url}
        />
    );

    test('This test must make match with the component <GiffItems/>', () => {
        expect(wappper).toMatchSnapshot();
    });

    test('This test must return the title of the props', () => {
        const titleProps = wappper.find('p').text().trim();
        expect(titleProps).toBe(title)
    });

    test('This test must return of the URL the element ancla and must return text content', () => {
        const anclaProps = wappper.find('a').props();
        const anclaText = wappper.find('a').text().trim();

        expect(anclaProps.href).toBe(`${url}/fullscreen`);
        expect(anclaText).toBe(viewURL)
    });

    test('This test must return the props equal the element img', () => {
        const imgSRC = wappper.find('img').props();

        expect(imgSRC.alt).toBe(title);
        expect(imgSRC.src).toBe(url);
    });

    test('This test must return the name class animate__animate__zoomIn', () => {
        const divClassName = wappper.find('.body-content--card').hasClass('animate__zoomIn');

        expect(divClassName).toEqual(true);
    })
});