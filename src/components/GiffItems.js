import React from 'react';

export const GiffItems = (props) => {
    const { id, title, url} = props;

    return (
        <div className='body-content--card animate__animated animate__zoomIn'>
            <li key={id} className='body-content--card--listItems '>
                <img src={url} alt={title} className='body-content--card--img' />
                <p className='body-content-card--title'>{title}</p>
                <a href={`${url}/fullscreen`} target={'_blank'} rel="noreferrer" className='body-content--card--ancla'>View Giff</a>
            </li>
        </div>
    )
}
