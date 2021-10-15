import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router';

import tmdbApi from '../../api/index';
import apiConfig from '../../api/config';

const CastList = props => {

    const {category} = useParams();

    const [casts, setCasts] = useState([]);

    useEffect(() => {
        const getCredits = async () => {
            const res = await tmdbApi.credits(category, props.id);
            setCasts(res.cast.slice(0, 5));
        }
        getCredits();
    }, [category, props.id]);
    return (
        
        <ul>
            {
                casts.map((item, i) => (
                    <li key={i}>
                        <img className="img-cast" src={apiConfig.w500Image(item.profile_path)} alt={item.name} />
                        <span className="name"> {item.name}</span>
                    </li>
                ))
            }
        </ul>
    );
}

export default CastList;