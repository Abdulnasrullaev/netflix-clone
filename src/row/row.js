import React, {useEffect, useState} from 'react';
import axios from "../axios";
import './Row.css'
import movieTrailer from 'movie-trailer'
import YouTube from "react-youtube";

const base_url = 'https://image.tmdb.org/t/p/original';


const Row = ({title, fetchUrl, isLargeRow}) => {
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("")

    useEffect(() => {
        async function axiosData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }

        axiosData()
    }, [fetchUrl])
    console.log(movies)

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            //https://developers.google.com/youtube/player_parameters
            autoPlay: 1,
        }
    }

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('')
        } else {
            movieTrailer(movie?.name || "")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search)
                    setTrailerUrl(urlParams.get('v'))
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }
    return (
        <div className='row'>
            <h2>{title}</h2>


            <div className='row__posters'>
                {movies.map(movie => (
                    <img onClick={() => handleClick(movie)}
                         key={movie.id}
                         className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                         src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    );
};

export default Row;