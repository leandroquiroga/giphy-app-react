import React from 'react'
import { Fragment } from 'react/cjs/react.production.min';
import { useFetchGiffs } from '../hooks/useFetchGiff';
import { GiffItems } from './GiffItems';
import SpinnerGiff from './SpinnerGiff';


export const GiffGrid = ({ category }) => {

    const { data: images, loading } = useFetchGiffs(category);
    console.log(images)

    return (
        
        <Fragment>
            {loading && <SpinnerGiff />}
            <hr />
            <h3 className='body-content--categories animate__animated animate__zoomIn'>{category}</h3>
            <div className='body-contnet-card animate__animated animate__zoomIn'>
                {
                    images.map((img) => (
                        <GiffItems
                            key={img.id}    
                            {...img} 
                        />
                    ))
                }
            </div> 
        </Fragment>
    )
}
