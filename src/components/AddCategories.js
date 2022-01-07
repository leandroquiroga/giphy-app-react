import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategories = ({setCategories, categories}) => {
    
    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setCategories([...categories, inputValue]);
        setInputValue('');
    }
    return (
        <form onSubmit={handleSubmit} id='form' >
            <input
                className='body-form--input'
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                autoFocus={true}
            />
        </form>
    )
}


AddCategories.prototype = {
    setCategories: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired,
}