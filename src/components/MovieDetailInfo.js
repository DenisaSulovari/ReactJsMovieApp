import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'


function MovieDetailInfo({match}){
    const[movie,setMovie]= useState([]);
    
    

    useEffect(()=>{
        axios.get('/movies.json')
            .then(res=>{
            console.log(res.data)
            setMovie(res.data);
        });


    },[]);


    const filteredMovies= movie.filter((movie)=>{
        return  movie.key.toLowerCase().includes(match.params.key.toLowerCase())
    })


    return(
        <>


        {filteredMovies.map((movie)=>(
         <section className="detail-container">
            <div className="moviedetailcontainer">
            <div className="content">
                
                <div className="plot">    
                    <img src={'../movie-covers/'+movie.img} alt={movie.name}/>
                    
                </div>
                <h2 className="desc">{ movie.name }</h2>
                <p className="rating ">Rating: {movie.rate}</p>
                <h3 className="desc">Movie description:</h3>
                <p className="desc">{movie.description}</p>
            </div>
            </div>
        </section>
    )


    )}



</>



);
}

export default MovieDetailInfo;