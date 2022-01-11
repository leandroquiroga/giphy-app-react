
import { useState, useEffect } from 'react';
import { fetchGiff } from './../helpers/getGift';


export const useFetchGiffs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });


    useEffect(() => {
        fetchGiff(category)
            .then(giff => {
                console.log(giff)
                    setState({
                        data: giff,
                        loading: false
                    });
            });
    }, [category]);


    return state;
} 