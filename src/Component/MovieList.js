import React from 'react'
import MovieCard from './MovieCard'


const MovieList = ({movies, searchTitle, searchRating}) =>  {
    console.log(movies)
    return (
        <div style={{backgroundColor:'black',display:"flex", padding:"120px",margin:'70px',}} 
        > 
            {movies
              .filter((movie)=>
             movie.name.toLowerCase().trim().includes(searchTitle.toLowerCase().trim()) &&
              movie.rating >= searchRating
               
              )
            .map((movie)=> (
                <MovieCard  movie={movie} key={movie.id} />
            ))}
        </div>
    )
}
export default MovieList
