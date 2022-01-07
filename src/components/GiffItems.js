import React from 'react'

export const GiffItems = (props) => {
    const { id, title, url } = props;

    return (
        <div className='body-content--card'>
            <li key={id} className='body-content--card--listItems'>
                <img src={url} alt={title} className='body-content--card--img' />
                <p className='body-content-card--title'>{title}</p>
            </li>
        </div>
    )
}
