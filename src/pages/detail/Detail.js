import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import tmdbApi from '../../api/index';
import apiConfig from '../../api/config';

import './Detail.scss';
import CastList from './CastList';
import VideoList from './VideoList';

import MovieList from '../../components/movie-list/MovieList';
import LazyBackground from '../../components/lazy-bg/LazyBackground';
import MinstoHrsMins from '../../components/format/MinstoHrsMins';
import Rating from '../../components/format/Rating';

const Detail = () => {

    const { category, id } = useParams();

    const [item, setItem] = useState(null);

    useEffect(() => {
        const getDetail = async () => {
            const response = await tmdbApi.detail(category, id, {params:{}});
            setItem(response);
            window.scrollTo(0,0);
        }
        getDetail();
    }, [category, id]);

    const Formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });
    return (
        <>
            {
                item && (
                    <>
                        <div className="banner" style={{backgroundImage: `url(${apiConfig.originalImage(item.backdrop_path || item.poster_path)})`}}></div>
                        <div className="mb-3 movie-content container">
                            <div className="movie-content__poster">
                                <LazyBackground className="movie-content__poster__img" src={apiConfig.originalImage(item.poster_path || item.backdrop_path)} />
                            </div>
                            <div className="movie-content__info">
                                <h1 className="title">
                                    {item.title || item.name}
                                </h1>
                                
                                <div className="genres">
                                    {
                                        item.genres && item.genres.slice(0, 5).map((genre, i) => (
                                            <span key={i} className="genres__item">{genre.name}</span>
                                        ))
                                    }
                                </div>
                                <div className="line"></div>
                                <ul className="infos">
                                    <li dangerouslySetInnerHTML={{__html:Rating(item.vote_average)}}></li>  
                                    <li className="popular">
                                        <i className='bx bxs-heart'></i>
                                        <p>{item.popularity}</p>
                                    </li>
                                    <li><p>{MinstoHrsMins(item.runtime) || ''}</p></li>
                                    <li>{item.vote_average}/10</li>
                                    <li>{item.release_date}</li>
                                </ul>
                                <div className="line"></div>
                                <div className="detailsandcast">
                                    <div className="detail">
                                        <h2>Details</h2>
                                        <ul>
                                            <li>
                                                <span className="t_a">Release Date:</span>
                                                <span className="t_b"> {item.release_date}</span>
                                            </li>
                                            <li>
                                                <span className="t_a">Spoken Language:</span>
                                                <span className="t_b"> {item.spoken_languages && item.spoken_languages.map(lang => lang.english_name).join(', ')}</span>
                                            </li>
                                            <li>
                                                <span className="t_a">Production Companies:</span>
                                                <span className="t_b"> {item.production_companies && item.production_companies.map(com => com.name).join(', ')}</span>
                                            </li>
                                            <li>
                                                <span className="t_a">Production Countries:</span>
                                                <span className="t_b"> {item.production_countries && item.production_countries.map(coun => coun.name).join(', ')}</span>
                                            </li>
                                            <li>
                                                <span className="t_a">Budget:</span>
                                                <span className="t_b">{Formatter.format(item.budget)}</span>
                                            </li>
                                            <li>
                                                <span className="t_a">Revenue:</span>
                                                <span className="t_b">{Formatter.format(item.revenue)}</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="cast">
                                        <h2>Cast</h2>
                                        <CastList id={item.id} />
                                    </div>
                                </div>
                                
                                <div className="line"></div>
                                <div className="overview">
                                    <h2>Overview</h2>
                                    <p>{item.overview}</p>
                                </div>   
                            </div>
                        </div>
                        <div className="container">
                            <div className="section mb-3">
                                <div className="section__header mb-2">
                                    <h2>Galllery</h2>
                                </div>
                                <div className="grid-video">
                                    <VideoList id={item.id}/>
                                </div>
                            </div>
                            <div className="section mb-3">
                                <div className="section__header mb-2">
                                    <h2>Similar</h2>
                                </div>
                                <MovieList category={category} type="similar" id={item.id}/>
                            </div>
                        </div>
                    </>
                )
            }
        </>
    );
}

export default Detail;