import React from 'react'

const MovieListDetail=({name,img})=>(
<div className="movie">
    
    <img src={'../movie-covers/'+img} alt={name}/>

    <div className="movie-info">
       <h3>{name}</h3>
       
    </div>
    </div>
);
    

export default MovieListDetail;