import React from 'react'
import { Fragment } from 'react/cjs/react.production.min';
import { useFetchGiffs } from '../hooks/useFetchGiff';
import { GiffItems } from './GiffItems';
import SpinnerGiff from './SpinnerGiff';
import PropTypes from 'prop-types';


export const GiffGrid = ({ category }) => {

    const { data:images, loading } = useFetchGiffs(category);
    
    return (    
        <Fragment>
            {loading && <SpinnerGiff />}
            <h3 className='body-content--categories animate__animated animate__zoomIn'>{ `Buscando.. ${category }`}</h3>
            { <div className='body-contnet-card animate__animated animate__zoomIn'>
                {
                    images.map((img) => (
                        <GiffItems
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div> }
        </Fragment>
    );
};

GiffGrid.prototype = {
    category: PropTypes.string.isRequired,
}