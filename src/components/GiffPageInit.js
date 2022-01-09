import React from 'react';


export const GiffPageInit = ({ logo, message}) => {
    return (
        <main className='body-content--page'>
            <img src={logo} alt="search fiff" className="body-contnet--imgPreview" /> 
            <p className='body-contnet--subtitle'> { message} </p>
        </main>
    )
}
