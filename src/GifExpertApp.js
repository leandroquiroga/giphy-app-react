import React, { useState } from "react";
import logo from './static/gif-icon--search.svg';
import { AddCategories } from "./components/AddCategories";
import { GiffPageInit } from './components/GiffPageInit';
import { GiffListItems } from './components/GiffListItems';



const GifExpertApp = ({defaultCategories = []}) => {
    const [categories, setCategories] = useState(defaultCategories);
    
    return (  
        <div className='body-content--main'>
            <AddCategories setCategories={setCategories} />
            {
                (categories.length === 0) ?
                    <GiffPageInit
                        logo={logo}
                        message='Busca tu Giff favorito'
                    /> :
                    <GiffListItems
                        categories={categories}
                    />     
            }
        </div>
    );
}
 
export default GifExpertApp;