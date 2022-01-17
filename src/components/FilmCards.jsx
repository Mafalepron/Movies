import React from "react";
import FilmCard from "./FilmCard";

function FilmCards(props) {
    return(
        <div className="Movies">
        { props.films.map((film, index) => (
            <FilmCard 
                key={index} 
                title={film.Title} 
                poster={film.Poster} 
                type={film.Type} 
                year={film.Year}
             />
        )) 
        }
        </div>     
    );
        
};

export {FilmCards};