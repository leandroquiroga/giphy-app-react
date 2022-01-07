import React, { Fragment, useState } from "react";


const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball Z']
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball Z'])
    
    const handAddCategory = () => {
        setCategories([...categories, 'Marvel']);
    }
    return (  
        <Fragment>
            <h2>GifExpert</h2>
            <hr />
            <button onClick={handAddCategory}>Agregar</button>
            <ol>
                { 
                    categories.map((category, index) => {
                        return <li key={index}>{ category }</li>
                    })    
                }
            </ol>
        </Fragment>
    );
}
 
export default GifExpertApp;