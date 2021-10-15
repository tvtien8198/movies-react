import React from 'react'
import { Link } from 'react-router-dom'
import { category, movieType, tvType } from '../api/index'
import HeroSlide from '../components/hero-slide/HeroSlide'
import MovieList from '../components/movie-list/MovieList'

export const Home = () => {
    return (
        <>
            <HeroSlide />
            <div className="container">
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Trending Movies</h2>
                        <Link to="/movie">
                            <div className="view-all">
                                <p>View all</p>
                                <i className='bx bx-chevron-right' ></i>
                            </div>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.popular}/>
                </div>
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Top Rated Movies</h2>
                        <Link to="/movie">
                            <div className="view-all">
                                <p>View all</p>
                                <i className='bx bx-chevron-right' ></i>
                            </div>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.top_rated}/>
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Trending TV</h2>
                        <Link to="/tv">
                            <div className="view-all">
                                <p>View all</p>
                                <i className='bx bx-chevron-right' ></i>
                            </div>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.popular}/>
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Top Rated TV</h2>
                        <Link to="/tv">
                            <div className="view-all">
                                <p>View all</p>
                                <i className='bx bx-chevron-right' ></i>
                            </div>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.top_rated}/>
                </div>
                
            </div>
        </>
    )
}
