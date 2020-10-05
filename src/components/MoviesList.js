import React from 'react'
import {Link} from 'react-router-dom'
import {useState,useEffect} from 'react'
import axios from 'axios'
import MovieListDetail from './MovieListDetail'
 
function MoviesList(){
    const[movies,setMovies]= useState([]);
   
     const[searchTerm,setSearchTerm]=useState('');
    useEffect(()=>{
        axios.get('/movies.json')
            .then(res=>{
            console.log(res.data)
            setMovies(res.data);
        });

    },[]);
    
     
    const handleOnSubmit=(e)=>{
        e.preventDefault();
        
         axios.get('../movies.json')
            .then(res=>{
            console.log(res.data)
            setMovies(res.data);
        });
        
       
    }
    

    
    const filteredMovies= movies.filter((movie)=>{
       return  movie.key.toLowerCase().includes(searchTerm.toLowerCase())
    })
    
    
     
    return(
        <>
        <header>
          <form onSubmit={handleOnSubmit}>
            <input type="search" className="search-box" placeholder="Search.." value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
          </form>
        </header>
<div className="movie-container"> 
          {filteredMovies.map((movie)=>(
       
       <Link className="link_style" to={`movies/${movie.key}`}><MovieListDetail key={movie.key} {...movie}/></Link>


    )
         
              
     )}
  
    </div>
 
    </>



    );
}

export default MoviesList;