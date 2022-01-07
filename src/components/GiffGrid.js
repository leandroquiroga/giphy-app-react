import React, {useEffect, useState} from 'react'
import { Fragment } from 'react/cjs/react.production.min';
import { GiffItems } from './GiffItems';

export const GiffGrid = ({ category }) => {

    const [images, setImages] = useState([]);
    const fetchGiff = async() => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Marvel&limit=10&api_key=tsJ9T1uzG8gsBfTIqEsyzLXJxs1njsMv';
        const response = await fetch(url);
        const { data } = await response.json();
        const giffs = data.map(img => {
            return (
                {
                    id: img.id,
                    title: img.title,
                    url: img.images?.downsized.url
               }
           )
        })
        
        console.log(giffs);

        setImages(giffs)
    }

    useEffect(() => { 
        fetchGiff();
    }, [])

    return (
        
        <Fragment>
            <h3 className='body-content--categories'>{category}</h3>
            <div className='body-contnet-card'>
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
