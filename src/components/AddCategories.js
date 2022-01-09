import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategories = ({setCategories}) => {
    
    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setCategories([inputValue]);
        setInputValue('');
    }
    return (
        <header className='body-content--header'>
            <div className='body-content--pageInit'>
                <h2 className="body-content--title animate__animated animate__shakeX">Giff Expert</h2>
                <form onSubmit={handleSubmit} id='form' >
                    <input
                        className='body-form--input'
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        autoFocus={true}
                    />
                </form>
            </div>
        </header>
    )
}


AddCategories.prototype = {
    setCategories: PropTypes.func.isRequired,
}