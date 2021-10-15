import React from 'react';

import './MovieCard.scss';

import { Link } from 'react-router-dom';

import Button from '../button/Button';

import { category } from '../../api/index';

import apiConfig from '../../api/config';
import LazyBackground from '../lazy-bg/LazyBackground';


const MovieCard = props => {

    const item  = props.item;

    const link = '/' + category[props.category] + '/' + item.id;

    const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

    return (
        <Link to={link}>
            <LazyBackground className="movie-card" src={bg}>
                <Button>
                    <i className="bx bx-play-circle"></i>
                </Button>
            </LazyBackground>
            <p className="movie-title">{item.title || item.name}</p>
        </Link>
    );
}

export default MovieCard;