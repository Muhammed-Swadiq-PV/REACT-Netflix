import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_KEY, imageUrl } from '../../constants/constants';
import './Banner.css';

function Banner() {
    const [movies, setMovies] = useState([]);
    const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${API_KEY}`)
            .then(response => {
                setMovies(response.data.results);
            })
            .catch(error => {
                console.error('Error fetching movies:', error);
            });
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentMovieIndex(prevIndex => (prevIndex + 1) % movies.length);
        }, 5000);

        return () => clearInterval(timer);

    }, [movies]);

    const currentMovie = movies[currentMovieIndex];

    return (
        <div style={{ backgroundImage: `url(${currentMovie ? imageUrl + currentMovie.backdrop_path : ''})` }} className="banner">
            <div className="content">
                <h1 className="title">{currentMovie ? currentMovie.title : ''}</h1>
                <div className="banner_buttons">
                    <button className="button">Play</button>
                    <button className="button">My List</button>
                </div>
                <p className="description">{currentMovie ? currentMovie.overview : ''}</p>
            </div>
            <div className="fade_bottom"></div>
        </div>
    );
}

export default Banner;
