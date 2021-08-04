import React from 'react'
import {useState} from 'react'
import {MoviesData} from "./Data"
import MovieList from "./Component/MovieList"
import  Search  from './Component/Search'
import AddModal from './Component/AddMovie'
import './App.css';
import'bootstrap/dist/css/bootstrap.min.css';


 function App() {

   const[movies, setMovies]=useState(MoviesData);
   const [searchTitle, setSearchTitle]=useState('');
   const[searchRating ,setSearchRating]=useState(0);
  return (
    <div className="app">

<Search setSearchTitle={setSearchTitle} searchRating={searchRating} setSearchRating={setSearchRating} />
      <AddModal setMovies={setMovies} movies={movies} />  
      <MovieList movies={movies} searchTitle={searchTitle} searchRating={searchRating}  />
    
    
    </div>

  )
}

export default App;
