import React, {useState } from "react";
import { AddCategories } from "./components/AddCategories";
import { GiffGrid } from "./components/GiffGrid";


const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);
    
    return (  
        <div className='body-content--main'>
            <h2 className="body-content--title">GifExpert</h2>
            <AddCategories
                setCategories={setCategories}
                categories={categories}    
            />
            <hr />
            <ol>
                { 
                    categories.map((category) => (
                        <GiffGrid
                            key={category}
                            category={category}     
                        />
                    ))    
                }
            </ol>
        </div>
    );
}
 
export default GifExpertApp;